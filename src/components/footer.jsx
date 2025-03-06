import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // Import TikTok icon

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-500 text-white min-h-[300px] py-16 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* About Us Section */}
          <div className="text-white space-y-10">
            <h2 className="text-lg font-semibold mb-3 text-white">About Us</h2>
            <p className="text-white text-lg leading-relaxed">
              At <span className="font-semibold text-red-500">Chasma-Tech</span>, we are dedicated to providing sustainable solar-powered charging solutions. Our goal is to make energy accessible and reliable anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="text-white space-y-4">
              <li>
                <a href="/terms" className="hover:text-red-500">Terms</a>
              </li>
              <li>
                <a href="/policy" className="hover:text-red-500">Policy</a>
              </li>
              <li>
                <a href="/about" className="hover:text-red-500">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
            <div className="flex justify-center space-x-4 space-y-5">
              <a href="https://www.facebook.com/share/1EHw687JfR/?mibextid=wwXIfr" className="text-white hover:text-red-500">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.tiktok.com/@th914060?_t=ZM-8u9QNVCeTkD&_r=1" className="text-white hover:text-red-500">
                <SiTiktok size={20} />
              </a>
            
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-white w-full">
          Copyright &copy; {new Date().getFullYear()} 
          <a href="https://solar-powered.netlify.app/" className="text-red-500 hover:underline"> Chasma-Tech</a>. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
