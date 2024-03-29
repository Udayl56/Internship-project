import React from 'react';
import './Slider.css'
import students from '../assets/students.jpg';
import classRoom from '../assets/pc-room.jpg';
import teaching from '../assets/teaching-student.jpg';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade className='col-8'>
            <Carousel.Item>
                <div className="image-container">
                    <img src={students} alt="First slide" className='w-100' />
                </div>
                <Carousel.Caption>
                    <button type="button" className='w3-animate-top w3-round-xxlarge btn btn-outline-light' >Enroll Now</button>

                    <h2 className='w3-animate-bottom m-1' style={{ background: "#57BD99" }} >Best Software Training Institute in Pune
                        with guaranteed Placements.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-container">
                    <img src={classRoom} alt="Second slide" className='w-100' />
                </div>
                <Carousel.Caption>

                    <h3 className='w3-animate-zoom'>

                        Well Mentain Lab</h3>
                    <p style={{ background: "#565656" }}> Get 100 % Support from Technical Team</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-container">
                    <img src={teaching} alt="Third slide" className='w-100' />
                </div>
                <Carousel.Caption>
                    <h3 style={{ background: "#57BD99" }}>WE ARE THE FUTURE WE ARE Skills Mentor</h3>
                    <p style={{ background: "##57BD99" }}>Learn from working Profesional and get chance to work with current project</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default CarouselFadeExample;
