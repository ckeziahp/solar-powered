import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white ">
      <div className="py-4 flex flex-col w-full justify-between p-4 bg-blue-200min-w-full gap-x-5 items-center mx-auto px-4 bg-blue-100">
        <Link to="/">

          {/* Insert your logo image here */}
          <img src="/logo.png" alt=" Logo" className="h-2" />
        </Link>
        <div className="space-x-4 ">
          <Link to="/" className="text-blue-600 underline hover:text-gray-800 gap-x-5" >Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-green-800" >About</Link>
          <Link to="/features" className="text-gray-600 hover:underline" >Features</Link>
          <Link to="/services" className="text-gray-600 hover:to-blue-500-underline" >Services</Link>
          <Link to="/company" className="text-gray-600 hover:text-gray-800" >Company</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800" >Contact</Link>
        </div>
      </div>
    </div>
  






    // <div className="min-h-screen flex flex-col items-center text-blue-900  mx-auto px-4 bg-blue-200">
    //         <div className ="w-full flex justify-between items-center p-4 bg-blue-200">
    //         <a href="#" className="text-2xl font-bold">
    //           <img src={logo} alt="Michael" />
    //         </a>
    //             <div className="space-x-4">
    //                 <Link to="/about" className="hover:underline">About</Link>
    //                 <Link to="/company" className="hover:underline">Company</Link>
    //                 <Link to="/services" className="hover:underline">Services</Link>
    //                 <Link to="/contact" className=" hover:underline">Contact</Link>
    //             </div>
    //         </div>
    //         </div>
  )
}

export default Navbar