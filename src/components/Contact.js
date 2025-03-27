import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-gray-800 text-white p-10 rounded-t-[5rem] mt-16 shadow-lg"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
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
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="bg-gray-500 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
