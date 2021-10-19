import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../Hooks/UseService';
import SingleService from './SingleService/SingleService';

const FullServices = () => {
    const [services, setServices] = useService();
    return (
        <Container>
            <Row>
                {
                    services.map(service =>
                        <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default FullServices;