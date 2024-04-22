import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar.png";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
    // Function to check if user has scrolled down 20px from the top
    // function handleScroll() {
    //   if (window.scrollY > 20) {
    //     setIsVisible(true);
    //   } else {
    //     setIsVisible(false);
    //   }
    // }

    // Event listener for scrolling
    // window.addEventListener("scroll", handleScroll);

    // Cleanup
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []); // Run only on mount and unmount

  // Function to smoothly scroll to top
  // function scrollToTop() {
  //   const scrollStep = -window.scrollY / (1000 / 15);
  //   const scrollInterval = setInterval(() => {
  //     if (window.scrollY !== 0) {
  //       window.scrollBy(0, scrollStep);
  //     } else {
  //       clearInterval(scrollInterval);
  //     }
  //   }, 15);
  // }

  return (
   
        <footer className="bg-black  shadow dark:bg-gray-900 " >
      <div className="w-full max-w-screen-xl mx-auto p-4 my-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-64 w-64"
              alt="Your Logo"
              style={{ cursor: "pointer" }}
            />
          </a>
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline me-4 md:me-6">
                contact
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
