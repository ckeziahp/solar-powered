import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-500 min-h-[120vh] flex items-center justify-center w-full px-8 sm:px-12 md:px-20 lg:px-32">
      
      <div className="flex flex-col md:flex-col items-center justify-center w-full max-w-screen-xl px-10 py-24 md:py-20 text-white gap-10">
      
        {/* Page Title */}
        <div className="mb-5 mt-7 text-center text-5xl py-6 px-10 w-full lg:pr-32">
          <h1 className="text-6xl sm:text-4xl md:text-5xl font-bold text-red-600 text-center">
            How It Works
          </h1>
        </div>

        <div className="container mx-auto py-8 px-10 w-full">

          {/* Stage 1: Building the Solar Charger */}
          <div className="flex flex-col md:flex-row items-center mb-20 px-10 py-20 text-white gap-8">

            {/* Text Content */}
            <div className="w-full md:w-1/2 px-10 text-3xl">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Stage 1: Building the Solar Charger
              </h2>
              <p className="text-white leading-relaxed text-2xl font-bold sm:text-lg">
                In this stage, we assemble high-quality solar panels, integrate advanced circuitry, and build a compact, efficient design that enables you to charge your devices using the power of the sun.
              </p>
            </div>

            {/* Image Slot */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://res.cloudinary.com/dxnamnbff/image/upload/v1741268625/process.jpg_kpupud.jpg"
                alt="Building the Solar Charger"
                className="w-15/12 md:w-8/12 lg:w-7/12 rounded-lg shadow-lg object-cover"
              />
            </div>

          </div>

          {/* Stage 2: How It Works */}
          <div className="flex flex-col md:flex-row items-center">

            {/* Image Slot */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://res.cloudinary.com/dxnamnbff/image/upload/c_fill,w_1100,h_700/v1741246330/charge.jpg_aqp5vy.jpg"
                alt="Solar Charger In Action"
                className="w-10/12 md:w-8/12 lg:w-7/12 rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 px-10 text-3xl">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Stage 2: How It Works
              </h2>
              <p className="text-white leading-relaxed text-2xl font-bold sm:text-lg">
                Once assembled, the solar charger harnesses sunlight through its efficient panels. The stored energy is converted into power to quickly charge your phone, ensuring you stay connected even in remote locations.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HowItWorks;
