import React from 'react'
import logo from "../assets/images/logo"

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-blue-900  mx-auto px-4 bg-blue-200">
            <div className ="w-full flex justify-between items-center p-4 bg-blue-200">
            <a href="#" className="text-2xl font-bold">
              <img src={logo} alt="Michael" />
            </a>
                <div className="space-x-4">
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/company" className="hover:underline">Company</Link>
                    <Link to="/services" className="hover:underline">Services</Link>
                    <Link to="/contact" className=" hover:underline">Contact</Link>
                </div>
            </div>
            </div>
  )
}

export default Navbar