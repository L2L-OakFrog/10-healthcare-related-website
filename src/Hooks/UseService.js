import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeservices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
}
export default useService;