import React from 'react';
import useGallery from '../../../Hooks/UseGallery';
import SingleImage from './SingleImage/SingleImage';
import "./Collection.css";
import { Col, Container, Row } from 'react-bootstrap';

const Collection = () => {
    const [images, setImages] = useGallery();
    return (
        <Container className="container">
            <Row>
                {
                    images.map(image =>
                        <SingleImage
                            key={image.id}
                            image={image}
                        ></SingleImage>)
                }
            </Row>
        </Container>
    );
};

export default Collection;