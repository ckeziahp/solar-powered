import React from  "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
        controls.start({ opacity: 0.8 });
      } else {
        setScrolling(false);
        controls.start({ opacity: 1 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-5 py-4 flex justify-evenly items-center bg-black transition-all duration-300 ${
        scrolling ? "backdrop-blur-md" : "bg-opacity-100"
      }`}
      animate={controls}
    >
      <Link to="/" className="text-white text-2xl font-bold">
        SolarCharge
      </Link>

      <div className="md:hidden text-white">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          ☰
        </button>
      </div>

      <div>
        <ul
        className={`md:flex text-white justify- px-5 md:relative flex md:flex-row top-16 w-full md:w-auto md:top-0 bg-black md:bg-transparent transition-transform ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/aboutinnovator" onClick={() => setMenuOpen(false)}>Innovator</Link></li>
        <li><Link to="/product" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/feature" onClick={() => setMenuOpen(false)}>Feature</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul></div>
      
    </motion.nav>
 








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
  );
};

export default Navbar