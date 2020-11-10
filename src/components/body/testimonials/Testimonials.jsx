import React from 'react';

export default function Testimonials(props){
    return(
        <div className="testimonials-container" id="testimonials-container">
            {props.testimonials}
        </div>
    )
}