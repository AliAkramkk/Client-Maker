import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ handleFormSubmit }) => { 
  return (
    <div className="">
      <Navbar />
      <main className="App">
     
        <Outlet  />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
