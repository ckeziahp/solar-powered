import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSolarPanel, FaGlobe, FaCheckCircle, FaCottonBureau } from "react-icons/fa"; // FontAwesome icons
import manwrk from "../../assets/images/manwrk.webp";
import work from "../../assets/images/work.jpg"; // Image of the innovator
import { FaCodeBranch, FaPagelines, FaPeopleCarryBox } from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-12 md:py-16 bg-white gap-10 min-h-screen bg-gradient-to-b from-black to-gray-500 justify-center">
      {/* Section Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Section - Images with Hover Zoom-Out */}
        <div className="relative">
          <motion.img
            src={manwrk}
            alt="Innovator"
            className="w-full h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-95"
          />
          {/* Overlapping Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            src={work}
            alt="Solar Panel"
            className="absolute bottom-[-20px] left-8 sm:left-12 md:left-16 w-32 sm:w-40 md:w-56 rounded-lg shadow-lg border-4 border-white transform transition duration-500 hover:scale-95"
          />
        </div>

        {/* Right Section - Content */}

        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 text-white gap-10">

  {/* Right: Text Content */}
  <div className="w-full text-[20px] md:w-1/2 max-w-2xl">
    <h1 className="text-4xl  font-bold text-red-600 mb-4">We Solve Your Energy Problem</h1>
    <p className="text-lg text-white leading-relaxed">
      At <span className="font-semibold text-red-600">Solar-Powered</span>, we are committed to providing innovative, eco-friendly charging solutions that harness the power of the sun. Our mission is to create sustainable energy solutions for both urban and off-grid communities.
    </p>
    <p className="text-lg text-white leading-relaxed mt-4">
      A small step toward a sustainable future starts with reliable energy solutions. With our portable solar chargers, you can stay powered anytime, anywhere.
    </p>
  </div>
</div>

      </motion.div>
      </div>
  );
};

export default About;
