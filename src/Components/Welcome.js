import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../imgs/image 3.png';
import img2 from '../imgs/2.png';
import prevIconImage from '../imgs/teenyicons_left-solid.png'; // Add your custom previous icon image path here
import nextIconImage from '../imgs/teenyicons_right-solid.png'; // Add your custom next icon image path here
import { Statistics } from './Statistics';
import img3 from '../imgs/Group 10.png';
import { Security } from './Security';

function CustomCarousel() {
    return (
        <>
            <Carousel
                fade
                prevIcon={<img src={prevIconImage} alt="prevIcon" />}
                nextIcon={<img src={nextIconImage} alt="nextIcon" />}
            >
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={img1} alt="img1" />
                </Carousel.Item>
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={img2} alt="img2" />
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
            </Carousel>

            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className='col-lg-6 col-md-6 col-sm-6'>

                        <h1 style={{ color: 'black' }} >The Fast Pinpoint</h1>
                        <h1 className="text-danger">Get Started -></h1>
                        <h1 style={{ color: 'black' }}> Tracking & Reservation.</h1>
                        <p>
                            Pinpoint is the fastest tracking and reservation software <br /> solution for personal and enterprise vehicles for institutes,  <br />offices and companies with live tracking, history recording, <br />estimated arrival time and usage report generation and much more features
                        </p>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 ' >
                        <img src={img3} alt="img3" style={{ height: '100px' }} />
                    </div>
                </div>
            </div>


            <Statistics />

            <Security />
          

        </>
    );
}

export default CustomCarousel;