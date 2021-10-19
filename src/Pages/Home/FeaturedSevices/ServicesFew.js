import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../Hooks/UseService';
import Service from './Service/Service';
import "./ServicesFew.css";

const ServicesFew = () => {
    const [services, setServices] = useService();
    const fewServices = services.slice(0, 6);
    return (
        <Container>
            <Row>
                {
                    fewServices.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </Row>
        </Container>
    );
};

export default ServicesFew;