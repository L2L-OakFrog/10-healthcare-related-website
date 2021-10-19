import React from 'react';
import { Col } from 'react-bootstrap';
import "./SingleImage.css";

const SingleImage = (props) => {
    const { img } = props.image;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 container'>
            <img src={img} width="100%" alt="" />
        </Col>
    );
};

export default SingleImage;