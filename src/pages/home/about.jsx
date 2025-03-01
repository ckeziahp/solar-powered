import React from 'react'
import mike from "../../assets/images/mike.jpg"

const About = () => {
    return (
      <div>

      <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
              <h1 className="text-4xl font-bold mb-4">About</h1>
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              We are passionate about innovation and creativity.
              </h2>

              <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
              <p className="text-lg">
              Michael Amfo, an 18-35 year old male innovator from Twifo Ati-Morkwa, Central Region, is addressing the challenge of power outages that cause phone batteries to run low, especially when phones are urgently needed for work. His solution is to build a solar-powered phone charger, allowing users to charge their phone batteries even in the absence of electricity. This innovation falls under the Technology sector and provides a sustainable solution to power outages, ensuring continuous communication and productivity
              </p>
               </h3>
           </div>

          </div>

          <div className="w-full h-[500px] md:w-1/2 flex justify-center">
              <img src={mike}  alt="Michael" />
          </div>

          </div>
          
    </div>
    );
  };

export default About