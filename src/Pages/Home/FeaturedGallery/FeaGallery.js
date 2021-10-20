import React from 'react';
import { Carousel } from 'react-bootstrap';
import useGallery from '../../../Hooks/UseGallery';
import Carousal from './Carousal/Carousal';

const FeaGallery = () => {
    const [images, setImages] = useGallery();
    /* const fewImages = images.slice(0, 3); */
    return (
        <div className="">
            {/* {
                fewImages.map(image =>
                    <Carousal
                        key={image.id}
                        image={image}
                    ></Carousal>)
            } */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/nurse-talking-with-child-writing-girl-symptoms-laptop-physician-doctor-specialist-medicine-providing-health-care-services-consultation-diagnostic-examination-treatment-hospital-cabinet_482257-14530.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84781.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/doctor-explining-child-functions-heart-using-tablet-wearing-facial-protection-pediatrician-specialist-with-gloves-providing-health-care-services-consultations-treatment-during-covid-19_482257-14509.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/female-doctor-putting-oxygen-mask-patient-face_107420-63869.jpg"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FeaGallery;