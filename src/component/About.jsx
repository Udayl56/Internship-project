import React from 'react'
import skills from '../assets/skills.png';

const About = () => {
    return (
        <div className="row">
            <div style={{ marginBottom: "2em", marginTop: "2em" }} className='col-6'>
                <h2 style={{
                    marginBottom: "1em", color: "#07294D"
                }}>About us</h2>
                <h1 style={{ marginBottom: "1.1em" }}>Welcome to Full Skills Mentor (Data Council)</h1>
                <p className='w3-serif' style={{ fontSize: "1.2rem", textAlign: "justify", padding: "20px" }}>Skills Mentor (Data Council) is a leading training institute that offers comprehensive courses in Full Stack Development. Our courses are designed to equip students with the skills and knowledge necessary to become proficient Full Stack Developers. Our Full Stack Development courses cover a wide range of topics, including HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. We use a hands-on approach that involves plenty of coding practice and real-world projects to help students apply what they've learned.</p>
            </div>
            <div className="  col-6">
                <img src={skills} className="card-img-top" alt="courseImg" style={{ width: "40rem" }} />
            </div>
        </div>
    )
}

export default About
