import React from "react";
import { motion } from "framer-motion";
import { FaUserGear, FaBolt } from "react-icons/fa6";
import michael from "../../assets/images/michael.png";

const Innovator = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-16 px-6">
      <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
        
          <div className="flex flex-col gap-10 md:flex-row items-center max-w-8xl">
                {/* Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-6xl grid md:grid-cols-2 gap-12 items-center p-4"
                >
                  {/* Right Section - Image (Now on the right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="md:order-2 flex justify-center"
                  >
                    <img
                      src={michael}
                      alt="Innovator"
                      className="w-48 md:w-64 h-auto rounded-lg"
                    />
                  </motion.div>

                          {/* Left Section - Text Content (Now on the left) */}
                          <div className="text-left flex flex-col md:flex-col items-center justify-center px-10 py-20 md:py-16 text-white gap-5">
                              <div className=" py-20 gap-5 px-10 text-5xl w-full lg:pr-32 flex flex-col items-center">
                                {/* Heading - About Innovator */}
                            <motion.h1
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1.4 }}
                              className="text-10xl md:text-3xl font-extrabold uppercase text-red-600"
                            >
                              <FaUserGear className="text-red-600 text-3xl font-bold " /> About Innovator
                            </motion.h1>

                            {/* Description */}
                            <p className="text-black font-bold text-5xl leading-relaxed md:text-lg mb-8">
                              <span className="font-semibold text-red-500">Michael Amfo</span> is an innovator from Twifo Ati-Morkwa, Central Region. He is solving the challenge of power outages affecting phone charging by designing a{" "}
                              <span className="font-semibold text-red-500">
                                solar-powered phone charger
                              </span>
                              . His invention ensures reliable phone charging even without electricity, helping people stay connected.
                            </p> 
                              </div>
                           
                              <div className=" py-20 gap-5 px-10 text-2xl w-full lg:pr-32 flex flex-col items-center">
                                {/* Why It Matters */}
                                <motion.h2
                                  initial={{ opacity: 0, x: -50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 1.6 }}
                                  className="text-2xl md:text-3xl text-red-600 flex items-center gap-2 mb-6 mt-8 font-semibold"
                                >
                                  <FaBolt className="text-red-600" /> Why It Matters
                                </motion.h2>

                                    <p className="md:text-lg leading-relaxed text-black text-4xl font-bold mb-8">
                                      This innovation tackles{" "}
                                      <span className="font-semibold text-red-500">energy insecurity</span> by providing an{" "}
                                      <span className="font-semibold text-red-500">
                                        affordable, portable, and sustainable
                                      </span>{" "}
                                      charging solution. It empowers communities, businesses, and individuals to stay connected even in off-grid locations.
                                    </p>
                                    </div>
        </div>
      </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Innovator;
