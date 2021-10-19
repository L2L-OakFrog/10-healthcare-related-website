import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctor from '../../../Hooks/UseDoctors';
import Doctor from './Doctor/Doctor';

const DoctorsFea = () => {
    const [doctors, setDoctors] = useDoctor();
    const fewDoctors = doctors.slice(0, 3);
    return (
        <Container>
            <Row>
                {
                    fewDoctors.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default DoctorsFea;