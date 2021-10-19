import React from 'react';
import { useParams } from 'react-router';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    return (
        <div>
            <h1>Doctor: {doctorId}</h1>
        </div>
    );
};

export default DoctorDetail;