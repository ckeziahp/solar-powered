import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-500 min-h-screen py-20 px-4 sm:px-8 md:px-12">
      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <p className="text-1xl sm:text-4xl md:text-5xl font-bold text-center text-red-600 mb-8">
          How It Works
        </p>
        
        {/* Stage 1: Building the Solar Charger */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
              Stage 1: Building the Solar Charger
            </h2>
            <p className="text-white leading-relaxed text-base sm:text-lg">
              In this stage, we assemble high-quality solar panels, integrate advanced circuitry, and build a compact, efficient design that enables you to charge your devices using the power of the sun.
            </p>
          </div>

          {/* Image Slot */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex justify-center">
            <motion.img
              src="https://res.cloudinary.com/dxnamnbff/image/upload/v1741268625/process.jpg_kpupud.jpg" // Replace with your image URL
              alt="Building the Solar Charger"
              className="w-10/12 md:w-9/12 rounded-lg shadow-lg object-cover"
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Stage 2: How It Works */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Slot */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
            <motion.img
              src="https://res.cloudinary.com/dxnamnbff/image/upload/c_fill,w_1100,h_700/v1741246330/charge.jpg_aqp5vy.jpg" // Replace with your image URL
              alt="Solar Charger In Action"
              className="w-10/12 md:w-9/12 rounded-lg shadow-lg object-cover"
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
              Stage 2: How It Works
            </h2>
            <p className="text-white leading-relaxed text-base sm:text-lg">
              Once assembled, the solar charger harnesses sunlight through its efficient panels. The stored energy is converted into power to quickly charge your phone, ensuring you stay connected even in remote locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
