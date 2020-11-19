import React, { useState } from "react";

export default function Testimonials(props) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  var message = props.content[currentTestimonial].message;
  var authorName = props.content[currentTestimonial].testimonialBy;
  var authorRole = props.content[currentTestimonial].role;
  var authorCompany = props.content[currentTestimonial].company;
  var authorLocation = props.content[currentTestimonial].location;

  const backClick = () => {
    if (currentTestimonial - 1 < 0) {
      setCurrentTestimonial(props.content.length);
    } else {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  const forwardClick = () => {
    if (currentTestimonial + 1 > props.content.length) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  return (
    <div className="testimonials-container" id="testimonials-container">
      <button className="back" onClick={backClick}></button>
      <div className="testimonial-content">
        <div className="testimonial-text">{message}</div>
        <div className="author">
          <div className="author-picture"></div>
          <div className="author-name">{authorName}</div>
          <div className="author-role">{authorRole}</div>
          <div className="author-company">{authorCompany}</div>
          <div className="author-location">{authorLocation}</div>
        </div>
      </div>
      <button className="forward" onClick={forwardClick}></button>
    </div>
  );
}
