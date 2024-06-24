import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VR from "./components/VR";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="outer-container">
      <div className="header-bg">
        <div className="header-bg-overlay"></div>
      </div>

      <div className="inner-container">
        <Navbar />
        <Hero />
        <VR />
        <Creations />
        <Footer />
      </div>
      
    </main>
  );
}

export default App;
