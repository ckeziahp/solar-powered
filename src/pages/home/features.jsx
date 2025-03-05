import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaSolarPanel, FaBatteryFull } from "react-icons/fa"; // Importing FontAwesome Icons
import { FaPlug } from "react-icons/fa6";

const features = [
  {
    icon: <FaPlug />,
    title: "Efficient Power Solutions",
    description:
      "Experience secure and innovative solar charging solutions tailored for your needs.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Sustainable Energy",
    description:
      "Harness clean and renewable energy to power your devices anywhere, anytime.",
  },
  {
    icon: <FaBatteryFull />,
    title: "Reliable Battery Life",
    description:
      "Extended battery storage with smart energy management for uninterrupted usage.",
  },
];

const Feature = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 py-28 md:py-36">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl"
      >
        <div className="flex flex-col justify-center items-center text-red-400 text-[42px] px-6 py-50 md:py-36">
          {/* Jiggle Effect on Hover */}
          <motion.h2
            className="text-[42px] md:text-5xl font-sans md:font-mono"
            whileHover={{ rotate: [0, -3, 3, -3, 3, 0] }}
            transition={{ duration: 0.4 }}
          >
            Why Use Our Service?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-600 font-sans md:font-mono"
            whileHover={{ rotate: [0, -2, 2, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
          >
            Discover the power of sustainable and efficient phone charging.
          </motion.p>
        </div>
      </motion.div>

      {/* Feature Icons in a Row */}
      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-8 py-6 font-sans md:font-mono"
          >
            {/* Icon with Hover Animation */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: 1 }}
              className="text-[#eb573d] text-5xl md:text-6xl mb-4 cursor-pointer"
            >
              {feature.icon}
            </motion.div>
            {/* Jiggle Effect on Text */}
            <motion.h3
              className="text-xl md:text-2xl font-semibold mb-2 text-[#672f2f] font-sans"
              whileHover={{ rotate: [0, -3, 3, -3, 3, 0] }}
              transition={{ duration: 0.4 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xs font-mono md:font-mono"
              whileHover={{ rotate: [0, -2, 2, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
