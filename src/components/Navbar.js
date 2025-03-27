import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-5 px-16 bg-gray-800 rounded-b-[5rem] shadow-lg text-white">
      <h1 className="text-2xl font-bold text-green-400">VIPUL</h1>
      <ul className="flex gap-6 text-lg">
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className="hover:text-green-400 cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
