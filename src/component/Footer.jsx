import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer id="footer-part" style={{ background: '#07294D', color: '#ffffff' }}>
            <div className="footer-top pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-about mt-40">
                                <div className="logo">
                                    <h4>Skills Mentor</h4>
                                </div>
                                <p>Full Stack Box (Data Council) has the courses and resources you need to succeed in today's fast-paced technology industry. Contact us today to learn and start your journey towards rewarding career in tech.</p>
                            </div>
                            <div className="footer-icons">
                                <a href="#" className="social-icon"><i className="fab fa-linkedin p-2"></i></a>
                                <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter p-2"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-facebook p-2"></i></a>
                                <a href="https://www.instagram.com" className="social-icon"><i className="fab fa-instagram p-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-link mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Sitemap</h6>
                                </div>
                                <ul className='list-unstyled'>
                                    <li> <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                    <li> <Link className="nav-link active" aria-current="page" to="/Courses">Courses</Link></li>
                                    <li><Link className="nav-link active" aria-current="page" to="/About">About Us</Link></li>
                                    <li> <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link></li>
                                    <li><Link className="nav-link active" aria-current="page" to="/Blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-link support mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Support</h6>
                                </div>
                                <ul >
                                    <li><a href="#"><i className="fa fa-angle-right"></i>FAQS</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Privacy</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Policy</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-address mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Contact Us</h6>
                                </div>
                                <ul className='list-unstyled'>
                                    <li>

                                        <div className="cont">

                                            <span>  3rd Floor, Above Jijamata Mahila Sahakari Bank Karvenagar, Pune, Maharastra - 411052 </span>
                                        </div>
                                    </li>
                                    <li>

                                        <div className="cont">
                                            <p> <i className="fa fa-phone"></i>  +91 9850941120</p>
                                        </div>
                                    </li>
                                    <li>

                                        <div className="cont">
                                            <p> <i className="fa fa-phone"></i>  +91 8087601850</p>
                                        </div>
                                    </li>
                                    <li>

                                        <div className="cont">
                                            <p>  <i className="fa fa-envelope-o"></i>  skillsmentor@outlook.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
