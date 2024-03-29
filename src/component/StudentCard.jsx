import React from 'react'
import sudentProfile from '../assets/profile.png'

const StudentCard = () => {
    return (
        <div className="card" >
            <img src={sudentProfile} className="card-img-top p-2" alt="courseImg" style={{ height: "250px", width: "250px" }} />
            <div className="card-body text-center">
                <h5 className="card-title">Student Name</h5>
                <p className="card-text">Company Name</p>
                <p className="card-text">x LPA</p>
            </div>
        </div>
    )
}

export default StudentCard
