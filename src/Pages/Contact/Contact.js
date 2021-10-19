import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquareAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";

const Contact = () => {
    const iconMail = <FontAwesomeIcon icon={faEnvelope} />
    const iconCall = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const iconLocation = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div className="container about-container">
            <h1>Welcome To MediCare!</h1>
            <p>We are here here for your any health related issues. Whenever you feel unusual just call us or visit our website for your needs.</p>
            <h3>Contact us</h3>
            <hr />
            <div className="container connect-container">
                <div className="contacts"><h4>{iconMail}
                    <br />
                    medicare@health.com</h4>
                </div>
                <div className="contacts"><h4>{iconLocation}
                    <br />
                    California, Los Angels, USA.</h4>
                </div>
                <div className="contacts"><h4>{iconCall}
                    <br />
                    +999-854-3462</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;