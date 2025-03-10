import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
 
  return (
    <div className="relative h-screen flex items-center justify-center text-center px-6 group">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-80"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxnamnbff/image/upload/v1741087997/pexels-gustavo-fring-4254162_djcjhg.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }} // Slight lift on hover
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-500 group-hover:text-red-400">
          Power Your Future with{" "}
          <span className="text-red-500">Chamas-Tech</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 transition-opacity duration-500 group-hover:opacity-80">
          Experience sustainable, innovative phone charging solutions anytime, anywhere.
        </p>

        
      </motion.div>
    </div>
  

  );
};

export default Hero;
