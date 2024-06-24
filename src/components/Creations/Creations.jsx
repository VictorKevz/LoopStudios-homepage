import React, { useState } from "react";

import "../css/creations.css";
import data from "./Data";

function Creations() {
  return (
    <section className="creations-container">
        <h3 className="creations-heading">Our creations</h3>
      
      <div className="creations-grid-container">
        {data.map((creation)=>(
          <div key={creation.id} className="creation">
          <picture className="creation-img-wrapper">
            <source srcset={creation.imgSrc[1]} media="(max-width:750px)" />
          <img src={creation.imgSrc[0]} alt={creation.name} className="creation-img"/>
          </picture>
          <span className="creation-name">{creation.name}</span>
          </div>
        ))}
      </div>
      <a className="creations-link">See all</a>

    </section>
  );
}

export default Creations;
