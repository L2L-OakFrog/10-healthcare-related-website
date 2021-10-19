import { useEffect, useState } from "react";

const useGallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('./homegallery.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return [images, setImages];
}
export default useGallery;