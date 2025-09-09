import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo text-white font-bold text-xl cursor-pointer">
        Leo9 Studio
      </div>
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#our-work">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
