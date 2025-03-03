import React from "react";
import hero from "../../assets/images/hero.jpg"

const Hero = () => {
  return (
      <div
        className="bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-white">
            Your Trusted Solar -Powered Partner
          </h1>
          <p className="mt-4 text-xl text-white">
            Helping you charge your phone with ease and comfort from your Home, School and Workplace.
          </p>
          <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Hero