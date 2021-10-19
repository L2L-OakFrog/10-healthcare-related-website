import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Doctor = (props) => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    const { name, image, details } = props.doctor;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 doctor'>
            <Card className='doctors'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to='/doctors'>Details</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;