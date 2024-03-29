import React from 'react'
import CourseCard from './CourseCard';
import StudentCard from './StudentCard';

const Courses = () => {
    return (
        <section style={{ background: "#ECEFF1", padding: "40px" }}>
            <div>
                <h2 style={{
                    color: "#07294D"
                }}>Our Courses</h2>
                <p className="w3-serif"
                    style={{ fontSize: "1.1rem" }}>Full Stack Development courses provide training in both Front-end and Back-end web development, covering various technologies, programming languages, and frameworks. These courses focus on building practical skills in developing responsive and interactive web applications using industry-standard tools and best practices, leading to career opportunities as Full Stack Developers, Web Developers, or Software Engineers.</p>
            </div>
            <div style={{ marginTop: "2em", marginBottom: "2em" }}>
                <h1 style={{ marginBottom: "1em" }}>Featured Courses</h1>
                <div className={"d-flex justify-content-between"} >
                    <CourseCard title={"MERN Stack"} />
                    <CourseCard title={"MEAN Stack"} />
                    <CourseCard title={"Web Devlopment"} />
                </div>
            </div>
            <div>
                <h2 className="w3-serif" style={{
                    color: "#07294D"
                }}>Who should attend these courses?</h2>
                <p style={{ fontSize: "1.1rem" }}>Full Stack Development courses are ideal for individuals who are interested in pursuing a career in web development, software engineering, or related fields. These courses are suitable for beginners as well as experienced developers who want to expand their skillset and knowledge of Full Stack Development. Those who have some programming experience in languages like Java, JavaScript, or Python may find it easier to grasp the concepts taught in these courses. However, anyone with a passion for programming and a willingness to learn can benefit from Full Stack Development courses. Additionally, individuals who want to develop their own web applications or start their own businesses can also benefit from these courses.
                </p>
            </div>
            <div style={{ marginTop: "2em", marginBottom: "2em" }}>
                <h1 style={{ marginBottom: "1em" }}>Recently placed students</h1>
                <div className={"d-flex justify-content-between"}>
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                    <StudentCard />
                </div>
            </div>
        </section>
    )
}

export default Courses
