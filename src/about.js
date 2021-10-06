import React from 'react';

class About extends React.Component {
    render() {
        return (<>
            <div className="container-fluid fluidcolor">
                <br />
                <div className="container aboutpadding" id="about">
                    <h3 className=" text-center pos2">ABOUT</h3>
                    <p className="h1 text-center pos21">Know Me More</p>
                    <p className="mt-5">Hi I,m Lokendra</p>
                    <p className="textalign tex">Hi I'm Otis a self taught, design thinking full-stack JavaScript developer with a
                        passion
                        for motion design.
                        I'm currently living in Opole, Poland, but originally from London. I'm an absolute geek and love
                        geeking
                        out
                        on all things Linux and JavaScript.

                        First fell in love with web design 20 years ago simply because it made my Photoshop artwork come
                        alive.
                        Since then I have been hooked. Although my focus for now is heavily in both frontend and backend web
                        development. My favorite development stack at the moment is React, UIkit, Node, MongoDB, Redis and
                        Arch
                        linux are.
                    </p>
                    <div className="row marginleft marginin row1">
                        <div className="col-lg-3 marginout col-sm-12">
                            <ul>
                                <li>name:</li>
                                <li><b>Lokendra</b></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 marginout col-sm-12">
                            <ul>
                                <li>E-mail</li>
                                <li><b>kambampatilokendra@gmail.com</b></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 marginout col-sm-12">
                            <ul>
                                <li>Date Of Birth</li>
                                <li><b>January,1</b></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 marginout col-sm-12">
                            <ul>
                                <li>Place</li>
                                <li><b>Hyderabad</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>)
    }
}
export default About