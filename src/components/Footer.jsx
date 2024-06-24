import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import data from "./Links";

import "./css/footer.css";

function Footer() {
  return (
    <article className="footer-wrapper">
      <div className="logo-socials-container">
        <figure>
          <img src={logo} alt="logo" className="logo my-footer" />
        </figure>
        <ul className="social-links">
          <li className="social-link">
            <img src={facebook} alt="facebook-icon" className="social-icon" />
          </li>
          <li className="social-link">
            <img src={twitter} alt="twitter-icon" className="social-icon" />
          </li>
          <li className="social-link">
            <img src={pinterest} alt="pinterest-icon" className="social-icon" />
          </li>
          <li className="social-link">
            <img src={instagram} alt="instagram-icon" className="social-icon" />
          </li>
        </ul>
      </div>

      <div className="footer-links-copyright-container">
        <ul className="footer-link-container">
          {data.map((link, linkIndex) => (
            <li key={linkIndex} className="footer-link">
              {link}
            </li>
          ))}
        </ul>
        <footer>© 2021 Loopstudios. All rights reserved.</footer>
      </div>
    </article>
  );
}

export default Footer;
