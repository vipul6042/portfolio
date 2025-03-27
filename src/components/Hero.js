import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-gray-900 text-white" id="home">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold">
          HI, I'M <span className="text-green-400">Vipul!</span>
        </h2>
        <p className="mt-4 text-gray-400">
          A passionate Software Developer who thrives on building scalable and
          efficient solutions. From full-stack web apps to machine learning
          models and blockchain projects, I enjoy turning ideas into reality
          with clean and maintainable code.
        </p>
        <div className="mt-6">
          <a
            href="/vipul_Resume.pdf"
            download
            className="bg-green-400 text-black px-6 py-2 rounded-lg hover:bg-green-500"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="ml-10">
        <img
          src="/profile.jpg"
          alt="Vipul"
          className="w-80 h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};



export default Hero;
