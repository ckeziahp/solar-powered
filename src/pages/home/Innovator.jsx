import React from "react";
import { motion } from "framer-motion";
import { FaUserGear, FaBolt } from "react-icons/fa6"; // Font Awesome icons
import mike from "../../assets/images/mike.jpg"; // Change to actual image

const Innovator = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-16 px-6">
      {/* Wrapper */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={mike}
            alt="Innovator"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Section - Text Content */}
        <div className="text-left">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="text-4xl font-bold text-red-600 flex items-center gap-2"
          >
            <FaUserGear className="text-black" /> About Innovator
          </motion.h1>

          {/* Description */}
          <p className="mt-4 text-black leading-relaxed">
            <span className="font-semibold">Michael Amfo</span> is an innovator from Twifo Ati-Morkwa, Central Region. He is solving the challenge of power outages affecting phone charging by designing a **solar-powered phone charger**. His invention ensures reliable phone charging even without electricity, helping people stay connected.
          </p>

          {/* Why It Matters */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="text-2xl font-bold mt-6 flex items-center gap-2"
          >
            <FaBolt className="text-yellow-600" /> Why It Matters
          </motion.h2>

          <p className="mt-2 text-gray-700">
            This innovation tackles **energy insecurity** by providing an **affordable, portable, and sustainable** charging solution. It empowers communities, businesses, and individuals to stay connected even in off-grid locations.
          </p>

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

export default Innovator;
