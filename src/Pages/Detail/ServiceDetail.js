import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Service: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;