import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { srvId } = useParams();
    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/L2L-OakFrog/assignment-10-json/main/homeservices.json`)
            .then(res => res.json())
            .then(data => setIds(data));
    }, [])

    const details = ids?.find(d => d.id == srvId);
    console.log(details);
    return (
        <div className="data">
            <h1>Service No: {details?.id}</h1>
            <h3>Name: {details?.name}</h3>
            <h5>Description: {details?.description}</h5>
            <h5>Doctors: {details?.doctors}</h5>
            <h5>Price: ${details?.price}</h5>
        </div>
    );
};

export default ServiceDetail;