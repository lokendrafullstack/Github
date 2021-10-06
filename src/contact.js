import React from 'react';
import reactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faMobileAlt, faFacebook } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    render() {
        return (<>
            <div className="container-fluid lavender" id="contact">
                <br />

                <h2 className="text-center pos8">CONTACT US</h2>
                <br />

                <div className="container">

                    <div className="row ">
                        <div className="col-lg-6 col-sm-12">
                            <h2 className="h3">Lets Get In Touch</h2>
                            <p className="t11">I enjoy discussing new projects and design challanges.Please share as much as
                                info as
                                possible we get the mostout of our first catch-up</p>
                            <div className="t1">
                                <p><b><FontAwesomeIcon icon={faSmile} className="text-weight-bold text-success" size="2x" />Living In:</b></p>
                                <p>Madhapur,Hyderabad,Telangana</p>
                            </div>
                            <div className="t2">
                                <p><b><FontAwesomeIcon icon={faMobileAlt} size="6x"></FontAwesomeIcon> Call: </b></p>
                                <p>(+91) 9572316546</p>
                            </div>
                            <div className="fonts ">
                                {/* <a href=""> <FontAwesomeIcon icon={faFacebook} /></a> */}
                                <a href=""> <i className="bi bi-twitter tw"></i></a>
                                <a href=""> <i className="bi bi-instagram insta"></i></a>
                                <a href=""> <i className="bi bi-whatsapp ws"></i></a>
                                <a href=""> <i className="bi bi-linkedin zbi-linkedin in"></i></a>
                            </div>

                        </div>
                        <div className="col-lg-6 col-sm-12 suk">
                            <h2 className="h3"><b>Estimate Your Project?</b></h2>
                            <div>
                                <label>What is Your Name:</label>
                                <br />
                                <input type="text" className="inp w-100 mt-3" />
                            </div>
                            <div className="mt-5">
                                <label>Your Email Address:</label>
                                <br />
                                <input type="email" className="inp w-100 mt-3" />
                            </div>
                            <div className="mt-5">
                                <label>How Can I Help You:</label>
                                <br />
                                <textarea className="inp1 w-100 mt-3"></textarea>
                            </div>
                            <button className="btn btn-outline-secondary w-100 one my-3">Send <i
                                className="bi bi-arrow-right-square-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}
export default Contact

