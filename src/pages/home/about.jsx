import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSolarPanel, FaGlobe, FaCheckCircle, FaCottonBureau } from "react-icons/fa"; // FontAwesome icons
import manwrk from "../../assets/images/manwrk.webp";
import work from "../../assets/images/work.jpg"; // Image of the innovator
import { FaCodeBranch, FaPagelines, FaPeopleCarryBox } from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 py-20 md:py-16 gap-10 min-h-screen bg-gradient-to-b from-black to-gray-500 justify-center">
      
      <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
        
        <div className="flex flex-col gap-10 md:flex-row items-center max-w-8xl">

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

                  {/* Right Se ction - Content */}

              <div className="flex flex-col md:flex-col items-center justify-center px-10 py-20 md:py-16 text-white gap-10">
           
                                  {/* Right: Text Content */}
                                  {/* <div className="w-full md:w-1/2 max-w-2xl flex flex-col px-5 py-20 -mt-5"> */}
                
                          {/* Title with Space Below */}
                          <div className="py-6 px-10 text-6xl w-full lg:pr-32">

                            <h1 className="text-center font-bold text-red-600">We Solve Your Energy Problem
                            </h1>

                          </div>


                          {/* First Paragraph */}
                        <div className="mb-6 pt-5 py-6 px-10 text-2xl lg:pr-32">

                          <h2 className="text-white leading-relaxed">
                            At <span className="font-semibold text-red-600">Chamas-Tech</span>, we are committed to providing eco-friendly charging solutions that harness the power of the sun. Our mission is to eradicate the overdependence on electricity to recharge with power banks and to see our product finding the interest of customers.
                          </h2>

                        </div>



                          {/* Second Paragraph with Top Margin */}
                          <div className="mt-6 pt-5 py-6 px-10 text-2xl lg:pr-32">

                            <h3 className="text-lg text-white leading-relaxed">
                              A step toward a sustainable future starts with reliable energy solutions. With our portable solar chargers, you can stay powered anytime, anywhere.
                            </h3>

                          </div>
    
                        {/* </div> */}
              </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
