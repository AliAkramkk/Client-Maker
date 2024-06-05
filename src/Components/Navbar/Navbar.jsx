import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/logo1.png';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-red-700' : '';

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 overflow--hidden">
      <header className="py-4 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            {/* <img src={logo} className="w-64 h-16" alt="Logo" /> */}
            <h3 className="block font-extrabold text-black text-xl font-serif">
              <h1 style={{ fontFamily: 'Cinzel, serif' }}>
                theclientsmaker <span className="text-red-700">.com</span>
              </h1>
             <p
                className="text-black text-xl italic mt-1"
                 style={{ fontFamily: 'Dancing Script, cursive' }}
             >
                 <em>Your digital salesman</em>
           </p>
           </h3>
          </div>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
            <li className={`font-bold text-lg text-black hover:scale-110 transition-all ease-in-out ${isActive('/')}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`font-bold text-lg text-black hover:scale-110 transition-all ease-in-out ${isActive('/about')}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`font-bold text-lg text-black hover:scale-110 transition-all ease-in-out ${isActive('/service')}`}>
              <Link to="/service">Services</Link>
            </li>
            
          
            <li className={`font-bold text-lg text-black hover:scale-110 transition-all ease-in-out ${isActive('/contact')}`}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="lg:hidden relative">
            <motion.button
              className="w-24 h-10 bg-white rounded-full flex justify-center items-center"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
            <motion.ul
              className={`absolute top-full left-0 right-0 rounded-xl bg-white shadow-lg ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <li className={`text-lg p-4 ${isActive('/')}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className={`text-lg p-4 ${isActive('/about')}`}>
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className={`text-lg p-4 ${isActive('/services')}`}>
                <Link to="/service" onClick={toggleMenu}>Services</Link>
              </li>
              {/* <li className={`text-lg p-4 ${isActive('/blogs')}`}>
                <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
              </li> */}
              <li className={`text-lg p-4 ${isActive('/contact')}`}>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
