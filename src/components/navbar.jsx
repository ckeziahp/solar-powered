import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
// import chamas from "../../assets/chamas.jpg"; // Replace with your actual logo path

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
        controls.start({ opacity: 0.9, y: -5 });
      } else {
        setScrolling(false);
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-5 py-4 min-h-[50px] flex justify-between items-center transition-all duration-300 z-50 ${
        scrolling ? "backdrop-blur-lg  shadow-lg" : ""
      }`}
      animate={controls}
    >
      {/* Logo Inserted Here */}
      <Link to="/" className="flex items-center">
        <img src={"https://res.cloudinary.com/dxnamnbff/image/upload/v1741644230/WhatsApp_Image_2025-03-06_at_15.36.21_43fd7a46_julvll.jpg"} alt="Chasma-Tech Logo" className="w-15 h-auto mr-2" />
        {/* <span className="text-2xl font-bold text-red-600">Chasm-Tech</span> */}
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-white space-x-10 gap-5">
        {["Home", "About", "Innovator", "Products", "Feature", "Contact"].map(
          (item, index) => (
            <li key={index} className="relative group">
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-red-500 transition duration-300"
              >
                {item}
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Sliding Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg flex flex-col items-center justify-center z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>

        {/* Mobile Menu Links */}
        <ul className="text-white text-2xl space-y-6">
          {["Home", "About", "Innovator", "Products", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-red-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
