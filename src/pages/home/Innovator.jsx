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
        {/* Right Section - Image (Now on the right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:order-2 flex justify-center"
        >
          <img
            src={mike}
            alt="Innovator"
            className="w-full h-[20px] object-contain rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Left Section - Text Content (Now on the left) */}
        <div className="text-left md:order-1">
          {/* Heading - About Innovator */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="text-3xl font-bold uppercase text-red-600 flex items-center gap-2 mb-6"
          >
            <FaUserGear className="text-red-600" /> About Innovator
          </motion.h1>

          {/* Description */}
          <p className="text-black leading-relaxed text-lg mb-8">
            <span className="font-semibold">Michael Amfo</span> is an innovator from Twifo Ati-Morkwa, Central Region. He is solving the challenge of power outages affecting phone charging by designing a 
            <span className="font-semibold text-red-500"> solar-powered phone charger</span>. His invention ensures reliable phone charging even without electricity, helping people stay connected.
          </p>

          {/* Why It Matters */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="text-3xl text-red-600 flex items-center gap-2 mb-6 mt-8 font-semibold"
          >
            <FaBolt className="text-red-600" /> Why It Matters
          </motion.h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            This innovation tackles <span className="font-semibold">energy insecurity</span> by providing an <span className="font-semibold">affordable, portable, and sustainable</span> charging solution. It empowers communities, businesses, and individuals to stay connected even in off-grid locations.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Innovator;
