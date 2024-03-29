import React from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (

        <div className="header row sticky-sm-top" style={{ background: "#07294D", color: "#ffffff" }}>
            <div className='col-sm-5 p-2'> <h2>Skills Mentor</h2></div>
            <div className='col-sm-4 p-2'>
                <h6 className='text-center'>Best IT Courses and Solutions For Students</h6>

            </div>
            <div className='col-sm-3 p-2 text-end' ><button type="button" className="btn btn-warning p-2">Apply Now</button></div>


            <nav className="navbar navbar-expand-lg bg-light ">


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Testimonials">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav></div>

    );
}
export default Header;