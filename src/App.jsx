import React from "react";
import Navbar from "./components/navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dark Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animated-bg"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <Navbar />

        <div className="hero-content max-w-3xl mt-24">
          <h1 className="text-5xl md:text-4xl font-extrabold mb-4 leading-tight animate-fadeInDown">
            Crafting Digital Experiences
          </h1>
          <p className="text-xl md:text-lg text-gray-300 mb-8 animate-fadeInUp">
            We redefine user experiences through Behavioral Science & AI
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#our-work"
              className="cta-button primary animate-popIn"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="cta-button secondary animate-popIn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Optional Sections */}
      <section id="our-work" className="h-screen flex items-center justify-center text-white text-3xl">
        Our Work Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center text-white text-3xl">
        Contact Section
      </section>
    </div>
  );
}

export default App;
