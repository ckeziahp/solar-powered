import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-500 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-20">
      
      <div className="flex flex-col md:flex-col items-center justify-center px-10 py-20 md:py-16 text-white gap-10">
      
                      {/* Page Title */}
                        <div className="mb-12 text-center py-6 px-10 text-6xl w-full lg:pr-32 gap-x-10">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600">
                            How It Works
                          </h1>
                        </div>
      
    
                    <div className="container mx-auto py-16">
        
       

                          {/* Stage 1: Building the Solar Charger */}
                          <div className="flex flex-col md:flex-row items-center mb-16 px-10 py-20 md:py-16 text-white gap-10">
                                      {/* Text Content */}
                                  <div className="w-full md:w-1/2 mb-6 pt-5 py-6 px-10 text-2xl lg:pr-32">
                                    <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                                      Stage 1: Building the Solar Charger
                                    </h2>
                                    <p className="text-white leading-relaxed text-base sm:text-lg">
                                      In this stage, we assemble high-quality solar panels, integrate advanced circuitry, and build a compact, efficient design that enables you to charge your devices using the power of the sun.
                                    </p>
                                  </div>

                                    {/* Image Slot */}
                                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex justify-center">
                                      <img
                                        src="https://res.cloudinary.com/dxnamnbff/image/upload/v1741268625/process.jpg_kpupud.jpg"
                                        alt="Building the Solar Charger"
                                        className="w-10/12 md:w-9/12 rounded-lg shadow-lg object-cover"
                                      />
                                    </div>
                          </div>

                                  {/* Stage 2: How It Works */}
                                  <div className="flex flex-col md:flex-row items-center">
                                    {/* Image Slot */}
                                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
                                      <img
                                        src="https://res.cloudinary.com/dxnamnbff/image/upload/c_fill,w_1100,h_700/v1741246330/charge.jpg_aqp5vy.jpg"
                                        alt="Solar Charger In Action"
                                        className="w-10/12 md:w-9/12 rounded-lg shadow-lg object-cover"
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
        </div>
          
    </div>
  );
};

export default HowItWorks;
