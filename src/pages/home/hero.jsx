import React from "react";

const Hero = () => {
  return (
      <div
        id="home"
        className="bg-cover bg-center"
        style={{ backgroundImage: "url()" }}
      >
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-white">
            Your Trusted Financial Partner
          </h1>
          <p className="mt-4 text-xl text-white">
            Helping you secure your financial future with ease and confidence.
          </p>
          <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Hero