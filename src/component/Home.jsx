import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your CSS file for custom styling
import Courses from './Courses';
import CarouselFadeExample from './Slider'
import About from './About';
import TechnologyLogo from './Technology';

function Home() {
    return (
        <>

            <div className="row">
                <CarouselFadeExample />





                <div className=" p-2 col-4">
                    <div className='p-2 w-100 card h-100'>
                        <div className="card-header">
                            <h4>Enquiry Now</h4>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-group p-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" className="form-control" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" required />
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" required />
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" id="phone" name="mobileno" className="form-control" pattern="^(0|91)?[6-9][0-9]{9}$" required />
                                </div>
                                <div className="form-group p-2 text-center">
                                    <button type="submit" className="btn btn-warning p-2 mt-3" name="sub">Register</button>
                                    <br />


                                    <a aria-label="Chat on WhatsApp" href="https://wa.me/18767847893">Need help</a>
                                    <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
                                    <span>  Call us <b>+91 8767847893</b></span>

                                </div>
                            </form>



                        </div>
                    </div></div>
            </div>




            <div className='row'>
                <About />
                <TechnologyLogo />
            </div>

            <div>
                <Courses />

            </div>

        </>



    );
}
export default Home;

