import React from "react";

const Skills = () => {
  const skills = [
    "ReactJS",
    "NextJS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git/GitHub",
    "Data Structures and Algorithms",
    "Competitive Programming",
    "App/Web Development",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
  ];

  return (
    <div
      className="bg-gray-800 rounded-lg mx-8 text-white p-8  shadow-lg text-center"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-green-100 text-green-950 rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
