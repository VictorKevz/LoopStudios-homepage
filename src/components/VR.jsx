import React, { useState } from "react";
import vrImg from "../assets/images/desktop/image-interactive.jpg";

import "./css/vr.css";

function VR() {
  return (
    <section className="vr-container">
      <div className="vr-img-container">
        <img src={vrImg} alt="image-interactive" className="vr-img" />
      </div>
      <div className="vr-text-container">
        <div className="vr-text-wrapper">
        <h2 className="vr-heading">The leader in interactive VR</h2>
        <p className="vr-paragraph">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed <span className="vr-text-cut">businesses through digital
          experiences that bind to their brand.</span>
        </p>
        </div>
      </div>
    </section>
  );
}

export default VR;
