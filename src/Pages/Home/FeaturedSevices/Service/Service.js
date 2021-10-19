import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    const { name, image, description, price, } = props.service;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 doctor'>
            <Card className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to='/services'>Details</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;