import React from 'react';
import "./Home.css";
import ServicesFew from "./FeaturedSevices/ServicesFew";
import DoctorsFea from './FeaturedDoctors/DoctorsFea';
import FeaGallery from './FeaturedGallery/FeaGallery';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    return (
        <div className="container mt-4">
            <div className="banner">
                <div>
                    <h1>WelCome To MediCare</h1>
                    <h5>The best place to look for help at the time of your emergency</h5>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to='/contact'>Learn More</NavLink></Button>{' '}
                </div>
                <div className="container">
                    <img src="https://image.freepik.com/free-vector/medical-design-poster-with-original-medicinal-capsule-consisting-red-white-parts-different-medical-objects_1284-53615.jpg" width="50%" alt="" />
                </div>
            </div>
            <div id='featured-services' className="container top-home">
                <hr />
                <h1>Our Top Services</h1>
                <hr />
                <ServicesFew></ServicesFew>
            </div>
            <div id="featured-doctors" className="container top-home">
                <hr />
                <h1>Our Top Doctors</h1>
                <hr />
                <DoctorsFea></DoctorsFea>
            </div>
            <div className="mb-4">
                <FeaGallery></FeaGallery>
            </div>
            <div></div>
        </div>
    );
};

export default Home;