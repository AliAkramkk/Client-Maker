import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/navbar.png';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-slate-700">
      <header className="py-2 absolute top-0 z-10 w-full overflow--hidden">
        <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16">
          <a href="/" className="flex items-center">
            <h3 className="block font-extrabold text-white text-xl font-serif">
              <h1 style={{ fontFamily: 'Cinzel, serif' }}>
                theclientsmaker <span className="text-red-700">.com</span>
              </h1>
              <p
                className="text-white text-xl italic mt-1"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                <em>Your digital salesman</em>
              </p>
            </h3>
          </a>
          <ul className="hidden lg:flex justify-center items-center gap-8">
            <li className="font-montserrat leading-normal hover:scale-110 transition-all ease-in-out text-lg text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/about">About</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/service">Services</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="lg:hidden relative">
            <motion.button
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center mr-20"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
            <motion.ul
              className={`absolute z-50 top-full left-0 right-0 bg-white rounded-xl shadow-lg ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              animate={isOpen ? 'open' : 'closed'}
              variants={variants}
            >
              <li className="font-montserrat leading-normal text-lg p-2 mr-8">
                <Link to="/">Home</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2 mr-8">
                <Link to="/about">About</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2 mr-10">
                <Link to="/service">Services</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2 mr-10">
                <Link to="/contact">Contact</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
