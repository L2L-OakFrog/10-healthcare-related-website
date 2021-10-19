import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    /*  const [id, setId] = useState({});
     useEffect(() => {
         fetch(`./homedoctors.json/${doctorId}`)
             .then(res => res.json())
             .then(data => setId(data))
     }, []) */
    return (
        <div>
            <h1>Doctor: {doctorId}</h1>
        </div>
    );
};

export default DoctorDetail;