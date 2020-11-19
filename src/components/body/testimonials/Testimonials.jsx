import React from 'react';

export default function Testimonials(props){

    console.log(props.content.length)

    return(
        <div className="testimonials-container" id="testimonials-container">
            {props.testimonials}
        </div>
    )
}