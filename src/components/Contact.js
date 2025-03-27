import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loader

    try {
      await axios.post(
        `${process.env.REACT_APP_MAIL_BACKEND}/send-email`,
        formData
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-800 text-white p-10 rounded-t-[5rem] mt-16 shadow-lg"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <p className="text-lg">
            Feel free to reach out for collaborations or just a friendly hello!
            😊
          </p>

          <div className="mt-4">
            <p className="text-white font-medium">
              📧 Email:
              <a
                href="mailto:vipulkumar2426@gmail.com"
                className="text-blue-500 hover:underline ml-2"
              >
                vipulkumar2426@gmail.com
              </a>
            </p>

            <p className="text-white font-medium mt-2">
              📞 Phone:
              <a
                href="tel:+919525180705"
                className="text-blue-500 hover:underline ml-2"
              >
                +91 9525108705
              </a>
            </p>
          </div>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/vipul-471667251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/vipul6042"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:vipulkumar2426@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-500 p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
