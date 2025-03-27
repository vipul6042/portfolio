import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Spardha' 23 Website",
      description: [
        "Revamped user experience by designing a modular, reusable component architecture in React, improving development efficiency by 35%.",
        "Streamlined navigation and state management through efficient implementation of client-side routing using React Router, reducing page load times by 40%.",
      ],
      tech: "React, JavaScript, CSS, Python",
      github: "https://github.com/vipul6042/Spardha-23",
    },
    {
      title: "S&T/R&D Project Monitoring System",
      description: [
        "Spearheaded the development of a web-based app for monitoring financial and physical progress in coal sector projects, enabling real-time updates for over 50 projects.",
        "Enhanced data security by implementing Two-Factor Authentication using Speakeasy, reducing unauthorized access incidents by 50%.",
        "Established seamless communication via Web Sockets, supporting up to 100 concurrent users during peak activity.",
      ],
      tech: "React, CSS, JavaScript, PostgreSQL, Web Sockets, Speakeasy",
      github:
        "https://github.com/orgs/HackNexus-Smart-India-Hackathon/repositories",
    },
    {
      title: "Jagriti '24 Website",
      description: [
        "Improved API response times by 25% through backend optimization with MongoDB and Express.js, ensuring 99.9% uptime during high-traffic periods.",
        "Designed responsive interfaces with React.js and Tailwind CSS, resulting in a 40% increase in user engagement.",
        "Successfully handled 1,000+ daily visitors post-launch with zero reported bugs during the first week.",
      ],
      tech: "React, Express, MongoDB, Tailwind CSS",
      github: "https://github.com/vipul6042/JagritiWebsite-New",
    },
  ];

  return (
    <div id="projects" className="min-h-screen pt-24 px-10">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[400px] w-fit max-w-[400px] transition-transform duration-300 hover:scale-105"
          >
            <div>
              <h2 className="text-2xl font-semibold text-green-500 mb-4">
                {project.title}
              </h2>

              <ul className="text-gray-700 list-disc list-inside space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <p className="mt-4">
                <span className="font-bold">Technologies:</span> {project.tech}
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-fit inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-center"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
