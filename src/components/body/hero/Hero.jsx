import React from "react";

export default function Hero(props) {
  return (
    <div className="hero-container" id="hero-container">
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      <div className="internal-links">
        <a href="#tech-container" className="link-button">
          {props.techLinkButton}
        </a>
        <a href="#socials-contact-container" className="link-button">
          {props.scheduleLinkButton}
        </a>
      </div>
      <div className="picture">PHOTO</div>
    </div>
  );
}
