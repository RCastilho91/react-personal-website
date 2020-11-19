import React from 'react';

export default function Articles(props){
    console.log(props)
    return(
        <div className="articles-container" id="articles-container">
            <h2>{props.articlesHeader}</h2>
        </div>
    )
}