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
                        src="https://i.ibb.co/p0LsBWj/doctor-explining-child-functions-heart-using-tablet-wearing-facial-protection-pediatrician-specialis.png"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/kGtnS3Y/doctor-giving-presentation-team-interim-doctors-107420-84781.png"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/F43vxCk/female-doctor-putting-oxygen-mask-patient-face-107420-63869.png"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bK2M2vV/nurse-talking-with-child-writing-girl-symptoms-laptop-physician-doctor-specialist-medicine-providing.png"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FeaGallery;