import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router';
import './DoctorDetails.css';

const DoctorDetail = () => {
    const { docId } = useParams();
    const [ids, setIds] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/L2L-OakFrog/assignment-10-json/main/homedoctors.json`)
            .then(res => res.json())
            .then(data => setIds(data));
    }, [])

    const details = ids?.find(d => d.id == docId);

    /* useEffect(() => {
        fetch(`/public/homedoctors.json`)
            .then(res => res.json())
            .then(data => {
                const details = data.find(d => d.id === docId)
                setId(details)
            })
    }, [docId]) */
    return (
        <div className="data">
            <h1>Doctor No: {details?.id}</h1>
            <h3>Name: {details?.name}</h3>
            <h5>From: {details?.resident}</h5>
            <h5>Age: {details?.age}</h5>
        </div>
    );
};

export default DoctorDetail;