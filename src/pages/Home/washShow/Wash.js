import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../Images/wash1jpg.jpg'
import image2 from '../../../Images/pwash2.jpg'
import image3 from '../../../Images/wash3jpg.jpg'
import image4 from '../../../Images/wash3jpg.jpg'

const Wash = () => {
    return (
        <div className='washpart' >
            <Carousel className='washCarousel' >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Car Wash</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>OIl Change</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Car Maintainance</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Engine Maintainance</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Wash;