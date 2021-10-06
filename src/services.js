import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Appsservices from './services/appsservices'
import Appsdevelop from './services/appsdevelopment'
import Appsdesign from './services/appsdesign'


// import Hire from './assets/images/hire.jpg'

class Services extends React.Component {
    render() {
        return (<BrowserRouter>
            <div className="p-5 container">
                <h2>these is the services component</h2>
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to="/services/design">Application Designings</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/services/development">Application Development</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/services/service">Mobile Apps </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <Switch>
                            <Route exact path="/services" component={Appsdesign} />
                            <Route path="/services/design" component={Appsdesign} />
                            <Route path="/services/development" component={Appsdevelop} />
                            <Route path="/services/service" component={Appsservices} />
                        </Switch>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid gr size">
            <br />
            <div className="container marginin" id="services">
                <h2 className="text-center pos7 mb-4">SERVICES</h2>

                <div className="row g-5">
                    <div className="col-lg-4 col-sm-12">
                        <div className="card text-center rd1">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-desktop mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">WEB DESIGN</h2>
                            <div className="card-body">
                                <p className="ser1 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card text-center rd2">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-code mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">WEB DEVELOPMENT</h2>
                            <div className="card-body">
                                <p className="ser2 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="card text-center rd3">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-pencil-ruler mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">UI/UX</h2>
                            <div className="card-body">
                                <p className="ser3 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row  mt-3 g-5">
                    <div className="col-lg-4 mb-5 col-sm-12">
                        <div className="card text-center rd4">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-window-maximize mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">FRONT-END</h2>
                            <div className="card-body ">
                                <p className="ser4 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 mb-5 col-sm-12">
                        <div className="card text-center rd5">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-archway mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">BACK-END</h2>
                            <div className="card-body">
                                <p className="ser5 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4  mb-5 col-sm-12">
                        <div className="card text-center rd6">
                            <div className="card-img-top mt-3">
                                <i className="fas fa-database mt-2"></i>
                            </div>
                            <h2 className="mt-2 h4">DATABASE</h2>
                            <div className="card-body">
                                <p className="ser6 mt-0">The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution
                                    of
                                    lettersThere are many variations of passages of Lorem Ipsum available, but the majority
                                    have
                                    suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even
                                    slightly
                                    believable.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div class="container-fluid bg bg-success p-0 mb-0 some">
            <img src={Hire} style={{ width: '100%', height: '350px' }} />
            <div class="matter ">
                <h2 class="text-center">Are You Interested In Working With Me</h2>
                <button class="btn btn-outline-info d-block mx-auto mt-3 p-2 fs-5">HIRE ME</button>

            </div>

        </div> */}
        </BrowserRouter>)
    }
}
export default Services
