import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [resumeContent, setResumeContent] = useState(null);
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch Resume Data
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get("/resume.json");
        setResumeContent(JSON.stringify(res.data, null, 2));
      } catch (error) {
        console.error("Failed to load resume:", error);
      }
    };
    fetchResume();
  }, []);

  // Toggle chat window
  const toggleChat = () => setIsOpen(!isOpen);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message to Groq Cloud
  const sendMessage = async () => {
    if (input.trim() && resumeContent) {
      const newMessages = [...messages, { text: input, isUser: true }];
      setMessages(newMessages);
      setInput("");

      try {
        const response = await axios.post(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant. You will be answering questions about Vipul's resume.
                Here is his resume data:
                ${resumeContent}
                
                Only answer questions related to the resume. For any unrelated query, respond with:
                "I am sorry, I am here to answer questions related to Vipul's resume only."
                Respond to greetings with:
                "Hello! How can I help you learn more about Vipul?"
                `,
              },
              { role: "user", content: input },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
            },
          }
        );

        const botMessage =
          response.data.choices[0]?.message?.content ||
          "No response from Groq Cloud.";
        setMessages([...newMessages, { text: botMessage, isUser: false }]);
      } catch (error) {
        console.error("Error:", error);
        setMessages([
          ...newMessages,
          { text: "Error: Unable to connect to Groq Cloud", isUser: false },
        ]);
      }
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
        onClick={toggleChat}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-5 w-80 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700"
        >
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-bold">Chat with me!</h3>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 my-2 max-w-xs rounded-lg shadow-md ${
                    msg.isUser
                      ? "bg-green-500 text-black self-end"
                      : "bg-gray-700"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-700 flex">
            <input
              type="text"
              className="w-full p-2 bg-gray-800 rounded-lg text-white"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-green-500 px-4 py-2 rounded-lg ml-2 hover:bg-green-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
