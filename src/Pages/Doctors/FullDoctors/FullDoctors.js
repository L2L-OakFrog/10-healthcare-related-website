import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctor from '../../../Hooks/UseDoctors';
import SingleDoctor from './SingleDoctor/SingleDoctor';

const FullDoctors = () => {
    const [doctors, setDoctors] = useDoctor();
    return (
        <Container>
            <Row>
                {
                    doctors.map(doctor =>
                        <SingleDoctor
                            key={doctor.id}
                            doctor={doctor}
                        ></SingleDoctor>)
                }
            </Row>
        </Container>
    );
};

export default FullDoctors;