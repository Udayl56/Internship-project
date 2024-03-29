

import React from 'react';

function ContactUs() {
    return (
        <div className="content">
            <h3 className="heading mb-4 p-2" style={{ textAlign: 'center' }}>Let's talk about everything!</h3>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <form className="mb-5" action="/mail.php" method="post" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-12 form-group p-4">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group p-4">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group p-4">
                                            <input type="text" className="form-control" name="mobileno" id="mobileno" placeholder="mobile no" pattern="^(0|91)?[6-9][0-9]{9}$" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-4">
                                            <input type="submit" value="Send Message" name="sub" className="btn btn-primary rounded-0 py-2 px-4" />
                                            <span className="submitting"></span>
                                        </div>
                                    </div>
                                </form>

                                <div id="form-message-warning mt-4"></div>
                                <div id="form-message-success">
                                    {/* Your message was sent, thank you! */}
                                </div>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-lg-4">
                                <div className="contact-address mt-10">



                                    <div className="cont">
                                        <p> 3rd Floor, Above Jijamata Mahila Sahakari Bank Karvenagar, Pune, Maharastra - 411052 </p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-address mt-10">
                                    <ul className='list-unstyled'>
                                        <li>



                                            <p> <i className="fa fa-phone"></i> +91 9850941120</p>

                                        </li>
                                        <li>



                                            <p> <i className="fa fa-phone"></i> +91 8087601850</p>


                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-address mt-10">
                                    <ul className='list-unstyled'>
                                        <li>
                                            <i className="fa fa-envelope-o p-2 "></i> <span>skillsmentor2024@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o p-2"></i> <span>skillsmentor@outlook.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
