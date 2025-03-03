import React from 'react'
import { motion } from "framer-motion";
import solar3 from "../../assets/images/solar3.jpg"

const About = () => {
  return (
    <div className="min-h-screen min-w-1/2 py-20 bg-blue-100 flex flex-col justify-between items-center p-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className=" flex text-center justify-between"
      >
        <div className='px-5 '>
      <div>
          <h1 className="text-4xl font-bold text-red-600">About Us</h1>
        <p className="mt-4 text-black-700 leading-relaxed">
          At Solar-Powered, we are committed to providing innovative, 
          <p>eco-friendly charging solutions that harness the power of the sun.</p>
          Our mission is to create sustainable energy solutions for both urban and off-grid communities.</p>

        <p>Michael Amfo, an 18-35 year old male innovator from Twifo Ati-Morkwa, Central Region, is addressing the challenge of power outages that cause phone batteries to run low, especially when phones are urgently needed for work. His solution is to build a solar-powered phone charger, allowing users to charge their phone batteries even in the absence of electricity. This innovation falls under the Technology sector and provides a sustainable solution to power outages, ensuring continuous communication and productivity.</p>
        </div>
        
        

        <div>
        <h2 className="text-2xl font-bold mt-6">Our Mission</h2>
        <p className="mt-2 text-gray-600">
          We strive to revolutionize energy consumption by offering affordable, portable,</p>
           <p> and high-efficiencysolar-powered charging solutions.  
          Our products are designed for everyone—from everyday smartphone users to adventure seekers and emergency responders.
        </p></div>

        </div>
        {/*  Image Slot - Customize the Image */}

        <div className=" px-6 py-5 mt-6 h-100 object-cover rounded-lg">
          <img 
            src={solar3}  // Change this to your image path
            alt="Solar Innovation"
          
          />
        </div>

        
      
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose Us?</h2>
          <ul className="mt-2 text-gray-600 space-y-2">
            <li>✅ **Eco-Friendly & Sustainable Energy**</li>
            <li>✅ **Portable & Durable Charging Solutions**</li>
            <li>✅ **Affordable Off-Grid Energy**</li>
            <li>✅ **Reliable for Outdoor & Emergency Use**</li>
          </ul>
        </div>
        
      </motion.div>
    </div>
  );
};

export default About;







// 
// import mike from "../../assets/images/mike.jpg"

// const About = () => {
//     return (
//       <div>

//       <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
//       <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
//           <div className="w-full md:w-1/2 lg:pr-32">
//               <h1 className="text-4xl font-bold mb-4">About</h1>
//               <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
//               We are passionate about innovation and creativity.
//               </h2>

//               <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
//               <p className="text-lg">
//               Michael Amfo, an 18-35 year old male innovator from Twifo Ati-Morkwa, Central Region, is addressing the challenge of power outages that cause phone batteries to run low, especially when phones are urgently needed for work. His solution is to build a solar-powered phone charger, allowing users to charge their phone batteries even in the absence of electricity. This innovation falls under the Technology sector and provides a sustainable solution to power outages, ensuring continuous communication and productivity
//               </p>
//                </h3>
//            </div>

//           </div>

//           <div className="w-full h-[500px] md:w-1/2 flex justify-center">
//               <img src={mike}  alt="Michael" />
//           </div>

//           </div>
          
//     </div>
//     );
//   };

// export default About