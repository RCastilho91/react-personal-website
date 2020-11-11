import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo-placeholder">Logo</div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <a className="header-link" href="#hero-container">
                {props[0].hero}
              </a>
            </li>
            <li>
              <a className="header-link" href="#tech-container">
                {props[0].tech}
              </a>
            </li>
            <li>
              <a className="header-link" href="#companies-container">
                {props[0].companies}
              </a>
            </li>
            <li>
              <a className="header-link" href="#testimonials-container">
                {props[0].testimonials}
              </a>
            </li>
            <li>
              <a className="header-link" href="#articles-container">
                {props[0].articles}
              </a>
            </li>
            <li>
              <a className="header-link" href="#socials-container">
                {props[0].socials}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="empty-div"></div>
    </div>
  );
}
