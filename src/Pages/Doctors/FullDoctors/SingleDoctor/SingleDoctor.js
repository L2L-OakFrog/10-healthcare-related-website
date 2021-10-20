import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./SingleDoctor.css";

const SingleDoctor = (props) => {
    const { id, name, image, details, resident, age } = props.doctor;
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 doctor'>
            <Card className='doctors'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text>Age: {age}</Card.Text>
                    <Card.Text>From: {resident}</Card.Text>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to={`/doctordetail/${id}/`}>Connect</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDoctor;