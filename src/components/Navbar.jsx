import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-hamburger.svg"
import iconCloseMenu from "../assets/images/icon-close.svg"
import data from "./Links";

import "./css/navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  }
  return (
    <nav className="nav-container">
      <figure className="logo-container">
        <img src={logo} alt="loopstudios-logo" className="nav logo" />
      </figure>
      <ul className={`nav-link-container ${isOpen ? "open" : ""}`}>
        {data.map((link, linkIndex) => (
          <li key={linkIndex} className="nav-link">
            {link}
          </li>
        ))}
      </ul>
      <figure className="toggle-icon" onClick={toggleMenu}>
        <img
          src={isOpen ? iconCloseMenu : iconMenu}
          alt={`${isOpen ? 'iconCloseMenu' : 'iconMenu'}`}
          className="menu-icon"
        />
      </figure>
      <div className={`mask ${isOpen ? "show" : ""}`}></div>

    </nav>
  );
}

export default Navbar;
