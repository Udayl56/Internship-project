import React from 'react'
import CourseCard from './CourseCard';
function ActiveCourses() {
    return (
        <div className="row">
            <div>
                <h2>Our Courses</h2>
                <p style={{ fontSize: "1.1rem" }}>Our courses provide high Quality content with in depth Knowlegde </p>
            </div>
            <div className={"d-flex justify-content-between p-4"} >
                <CourseCard title={"MERN Stack"} />
                <CourseCard title={"MEAN Stack"} />
                <CourseCard title={"Web Devlopment"} />
            </div>
            <div className={"d-flex justify-content-between p-4"} >
                <CourseCard title={"MERN Stack"} />
                <CourseCard title={"MEAN Stack"} />
                <CourseCard title={"Web Devlopment"} />
            </div>
            <div className={"d-flex justify-content-between p-4"} >
                <CourseCard title={"MERN Stack"} />
                <CourseCard title={"MEAN Stack"} />
                <CourseCard title={"Web Devlopment"} />
            </div>
        </div>
    );
}
export default ActiveCourses