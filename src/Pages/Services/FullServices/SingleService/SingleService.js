import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleService = (props) => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    const { name, image, description, price, doctors } = props.service;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2 doctor'>
            <Card className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <ListGroup className="list-group-flush special">
                        <ListGroupItem><strong>Doctors:</strong> {doctors}</ListGroupItem>
                        <ListGroupItem><strong>Price:</strong> ${price}</ListGroupItem>
                    </ListGroup>
                    <br />
                    <Button variant="outline-primary"><NavLink style={styles} to='*'>Details</NavLink></Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;