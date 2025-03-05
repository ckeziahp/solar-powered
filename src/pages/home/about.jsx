import React from "react";
import { motion } from "framer-motion";
import manwrk from "../../assets/images/manwrk.webp";
import mike from "../../assets/images/mike.jpg"; // Add an image of the innovator

const About = () => {
  return (
    <div className="min-h-screen bg-blue-300 flex flex-col justify-center items-center py-16 px-6">
      {/* Section Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Section - Image */}
        <div className="relative">
          {/* Main Image */}
          <img
            src={manwrk}
            alt="Solar Innovation"
            className="w-full h-10 rounded-lg"
          />
          {/* Overlapping Image of Innovator */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            src={mike}
            alt="Innovator"
            className="absolute bottom-[-20px] left-8 sm:left-12 md:left-16 w-32 sm:w-40 md:w-56 rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* Right Section - Content */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-red-600">About Us</h1>
          <p className="mt-4 text-black leading-relaxed">
            At <span className="font-semibold">Solar-Powered</span>, we are committed to providing innovative, eco-friendly charging solutions that harness the power of the sun. Our mission is to create sustainable energy solutions for both urban and off-grid communities.
          </p>

          {/* About the Innovator */}
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Michael Amfo</span>, an innovator from Twifo Ati-Morkwa, Central Region, is tackling the issue of power outages affecting phone charging. His solar-powered phone charger offers a sustainable solution, ensuring continuous communication and productivity.
          </p>

          {/* Our Mission */}
          <h2 className="text-2xl font-bold mt-6">Our Mission</h2>
          <p className="mt-2 text-gray-700">
            We aim to revolutionize energy consumption with portable, high-efficiency solar-powered charging solutions. Our products cater to everyone—from everyday users to outdoor adventurers and emergency responders.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose Us?</h2>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>✅ **Eco-Friendly & Sustainable Energy**</li>
            <li>✅ **Portable & Durable Charging Solutions**</li>
            <li>✅ **Affordable Off-Grid Energy**</li>
            <li>✅ **Reliable for Outdoor & Emergency Use**</li>
          </ul>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow-md"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
