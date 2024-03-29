import React from 'react';
import './coursecard.css';
import courseimg from '../assets/courseName.png'


const CourseCard = ({ title }) => {
    return (
        <div className="card course-card w3-hover-opacity" > {/* Add custom class for styling */}
            <img src={courseimg} className="card-img-top" alt="courseImg" style={{ height: "200px", width: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Duration: 5 months <i className="fas fa-clock"></i></p>
            </div>
        </div>
    );
}

export default CourseCard;

