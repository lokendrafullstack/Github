import React from 'react';
import reactDom from 'react-dom';

class Skills extends React.Component {
    render() {
        return (<>
            <div className="container-fluid lightblue aboutpadding">
                <br />
                <div className="container aboutpadding  marginin lavender" id="skills">
                    <h2 className=" text-center pos">SKILLS</h2>
                    <div className="progress mt-3 " style={{ height: '30px' }}>
                        <div className="progress-bar bg-info text-dark " style={{ width: '100px' }}>HTML</div>
                        <div className="progress-bar bg-primary w-100 ">
                        </div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '45px' }}>90%</div>
                    </div>
                    <br />
                    <div className="progress" style={{ height: '30px' }}>
                        <div className="progress-bar bg-secondary text-dark " style={{ width: '100px' }}>CSS</div>
                        <div className="progress-bar bg-success w-100"></div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '45px' }}>90%</div>
                    </div>
                    <br />
                    <div className="progress" style={{ height: '30px' }}>
                        <div className="progress-bar bg-primary text-dark " style={{ width: '100px' }}>BOOTSTRAP</div>
                        <div className="progress-bar bg-secondary w-100"></div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '45px' }}>90%</div>
                    </div>
                    <br />
                    <div className="progress" style={{ height: '30px' }}>
                        <div className="progress-bar bg-light text-dark " style={{ width: '100px' }}>JAVASCRIPT</div>
                        <div className="progress-bar bg-info w-100"></div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '45px' }}>90%</div>
                    </div>
                    <br />
                    <div className="progress" style={{ height: '30px' }}>
                        <div className="progress-bar bg-success text-dark " style={{ width: '100px' }}>REACT</div>
                        <div className="progress-bar bg-warning w-100"></div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '65px' }}>80%</div>
                    </div>
                    <br />
                    <div className="progress" style={{ height: '30px' }}>
                        <div className="progress-bar bg-danger text-dark " style={{ width: '100px' }}>WEB DESIGN</div>
                        <div className="progress-bar bg-dark w-100"></div>
                        <div className="progress-bar bg-light text-dark" style={{ width: '85px' }}>70%</div>
                    </div>

                    <button className="btn btn-success mt-5 justify-content-center d-block mx-auto">DOWNLOAD
                        CV</button>
                    <h2 className="text-center mt-3 text-dark h3">Languages Known</h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="circle1 d-flex mx-auto text-dark">100%
                            </div>
                            <h3 className="text-center pre text-dark h4">TELUGU</h3>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="circle2 d-flex mx-auto text-dark">70%
                            </div>
                            <h3 className="text-center pre text-dark h4">HINDI</h3>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="circle3 d-flex mx-auto text-dark">70%
                            </div>
                            <h3 className="text-center pre text-dark h4">ENGLISH</h3>
                        </div>

                    </div>

                    <h3 className="h3 text-center mt-4 text-dark">HOW CAN I WORK</h3>
                    <div className="row ">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card marginin crr1">
                                <h3 className="h4 text-center mt-3">RESEARCH</h3>
                                <p className="c1">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.
                                </p>
                                <div className="text-center ">
                                    <button className="btn btn-success w-50  m-3">View More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card marginin crr2">
                                <h3 className="h4 text-center mt-3">DESIGN</h3>
                                <p className="c2">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.
                                </p>
                                <div className="text-center ">
                                    <button className="btn btn-success w-50  m-3">View More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card marginin crr3">
                                <h3 className="h4 text-center mt-3">DEVELOPMENT</h3>
                                <p className="c3">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.
                                </p>
                                <div className="text-center ">
                                    <button className="btn btn-success w-50  m-3">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>)
    }
}
export default Skills