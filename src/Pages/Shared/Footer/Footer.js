import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div sticky="bottom">
            <h1>MediCare</h1>
            <h5>Feeling Unusual? We are here for you</h5>
            <p className='copyright'>Privacy Policy / MediCare © 2021 / All Rights Reserved</p>
        </div>
    );
};

export default Footer;