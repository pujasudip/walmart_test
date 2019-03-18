import React from 'react';
import '../styles/imageDisplay.css';

export default (props) => {
    const {src, title} = props.item;
    return (
        <div className="postContainer">
            <div className="imageCaption"><p>{title.toUpperCase()}</p></div>
            <div style={{backgroundImage: `url(${src})`}} className="postImage"/>
        </div>
    )
}