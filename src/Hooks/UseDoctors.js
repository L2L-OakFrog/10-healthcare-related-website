import { useEffect, useState } from "react";

const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./homedoctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return [doctors, setDoctors];
}
export default useDoctor;