import React from "react";
import "./Tech.css"

export default function Tech() {
  return (
    <div className="tech-container" id="tech-container">
      <h2>Stack</h2>
      <div className="frontend-tech">
        <div className="tech-title">
          <h3>Frontend</h3>
        </div>
        <div className="tech-logos-container"></div>
      </div>
      <div className="backend-tech">
        <div className="tech-title">
          <h3>Backend</h3>
        </div>
        <div className="tech-logos-container"></div>
      </div>
      <div className="database-tech">
        <div className="tech-title">
          <h3>Databases</h3>
        </div>
        <div className="tech-logos-container"></div>
      </div>
      <div className="misc-tech">
        <div className="tech-title">
          <h3>Miscellaneous</h3>
        </div>
        <div className="tech-logos-container"></div>
      </div>
    </div>
  );
}
