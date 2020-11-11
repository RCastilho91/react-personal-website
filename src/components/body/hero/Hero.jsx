import React from "react";

export default function Hero(props) {
  return (
    <div className="hero-container" id="hero-container">
      <div className="title">{props[0].title}</div>
      <div className="subtitle">{props[0].subtitle}</div>
      <div className="internal-links">
        <a href="#tech-container" className="link-button">
          {props[0].techLinkButton}
        </a>
        <a href="#socials-contact-container" className="link-button">
          {props[0].scheduleLinkButton}
        </a>
      </div>
      <div className="picture">PHOTO</div>
    </div>
  );
}
