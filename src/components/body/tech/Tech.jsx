import React from "react";
import "./Tech.css";

import Frontend from "./tech-divs/Frontend.jsx";
import Backend from "./tech-divs/Backend.jsx";
import Databases from "./tech-divs/Databases.jsx";
import Misc from "./tech-divs/Misc.jsx";

export default function Tech() {
  return (
    <div className="tech-container" id="tech-container">
      <h2>Stack</h2>
      <div className="upper-tech">
        <Frontend />
        <Backend />
      </div>
      <div className="lower-tech">
        <Databases />
        <Misc />
      </div>
    </div>
  );
}
