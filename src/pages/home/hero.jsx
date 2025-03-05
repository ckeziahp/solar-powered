import React from "react";
import { motion } from "framer-motion";
import solar3 from "../../assets/images/solar3.jpg"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center">
      
      {/* Background Image with Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-red-900/70"></div> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dxnamnbff/image/upload/v1741087997/pexels-gustavo-fring-4254162_djcjhg.jpg')",
        }}
      ></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-6xl md:text-6xl font-bold ">
          Power Your Future with <span className="text-red-500">Solar-Powered</span>
        </h1>
        <p className="mt-4 text-lg">
          Experience sustainable, innovative phone charging solutions anytime, anywhere.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md"
        >
          Explore Products
        </motion.button>
      </motion.div>
      </div>
  );
};

export default Hero