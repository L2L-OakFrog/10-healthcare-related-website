import React from 'react';
import "./NotFound.css";
import image from "../../Images/2689520-ai (1) (1).png";

const NotFound = () => {
    return (
        <div className="container notavail">
            <img src={image} alt="" />
            <h1>404 error</h1>
            <p>Nothing over here yet.</p>
        </div>
    );
};

export default NotFound;