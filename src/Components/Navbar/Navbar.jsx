import React, { useState } from 'react';
import logo from "../../assets/navbar.png";
// import menu from "../../assets/option.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="flex bg-slate-700">
      <header className=" py-2 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="flex items-center ">
            <img
              src={logo}
              alt="logo"
              width={200}
              height={60}
              className="w-[150px] h-[80px] transition duration-300 ease-in-out transform hover:scale-125 animate-spin"
            />
            <h3 className="-ml-10 block font-extrabold text-white -mt-6 text-xl font-serif">
              TheClients<span className="text-rose-700"> Maker</span><br />
              <p className="text-white text-sm italic mt-1">Your digital <em>salesman</em></p>
            </h3>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <li className="font-montserrat leading-normal font-bold text-lg text-white">
              <Link to= "/">Home</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white">
            <Link to= "/about">About</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-montserrat leading-normal text-lg text-white">
              
              <Link to="/service">Services</Link>
            </li>
            {/* <li className="font-montserrat leading-normal text-lg text-white">
              
              <Link to="/image">Image</Link>
            </li> */}
          </ul>
          

          {/* <a href="/" className="flex items-center">
            <img
              // src={menu}
              alt="hamburger"
              width={100}
              height={60}
              className="w-[40px] h-[35px] mx-4 transition duration-300 ease-in-out transform hover:scale-125 animate-spin"
            />
          </a> */}
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 lg:hidden cursor-pointer"
            onClick={toggleDropdown}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul className="absolute z-50 top-16 left-0 right-0 bg-gray-800"style={navbarStyle}>
              <li className="font-montserrat leading-normal text-lg">
                <Link to="/">Home</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg">
                <Link to="/about">About</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg">
                <Link to="/service">Services</Link>
              </li>
            </ul>
          )}


        </nav>
      </header>
    </div>
  );
};

export default Navbar;
