import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          {/* Insert your logo image here */}
          <img src="/logo.png" alt=" Logo" className="h-8" />
        </Link>
        <div className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-800" to="/">Home</Link>
          <Link className="text-gray-600 hover:text-gray-800" to="/about">About</Link>
          <Link className="text-gray-600 hover:text-gray-800" to="/services">Services</Link>
          <Link className="text-gray-600 hover:text-gray-800" to="/contact">Company</Link>
          <Link className="text-gray-600 hover:text-gray-800" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  






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