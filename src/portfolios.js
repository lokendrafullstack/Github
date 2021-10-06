import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (<>
            <div className="container-fluid purple aboutpadding">
                <br />
                <div className="container navyblue " id="portfolio">
                    <h2 className="text-center pos4">PORTFOLIO</h2>
                    <h2 className="text-center h3 mt-3 pos54">Some Of My Recent Projects</h2>

                    {/* <!------------------------------DYNAMIC TABS----------------------------------------------------------------------------------> */}
                    <nav>
                        <div className="nav nav-tabs justify-content-center my-3 " id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true">NEW</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ALL</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                                type="button" role="tab" aria-controls="nav-contact" aria-selected="false">PERSONAL</button>
                        </div>
                    </nav>
                    {/* <!---------------------------------------------NEW PROJECTS IN DYNAMIC TAB-----------------------------------------------------------------------> */}
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid ">
                                    <a className="navbar-brand" href="#"><i className="bi bi-emoji-smile"></i></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar" aria-controls="navbarNavDropdown" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="about.html">about</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="contact.html">contact</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#firstlink">
                                                    services</a>
                                                <ul className="dropdown-menu text-center" id="firstlink">
                                                    <li><a href="" className="dropdown-item">mobiles</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="display.html" className="dropdown-item">refrigerators</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="" className="dropdown-item">washing machines</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>

                                                    <li><a href="" className="dropdown-item">laptops</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="" className="dropdown-item">groceries</a></li>
                                                </ul>

                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="testominals.html">testominals</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="container-fluid aboutpadding ">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <ul className="list-group">
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mobiles
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i>
                                                Electronics</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Goods</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Books</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Groceries
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Fashion
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mens wear
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Womens
                                                wear</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Kids</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Housing
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Gadjets
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Play
                                                Stations</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mobiles
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i>
                                                Electronics</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Goods</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Books</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Groceries
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Fashion
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mens wear
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Womens
                                                wear</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Kids</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Housing
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Gadjets
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Play
                                                Stations</li>

                                        </ul>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                                        RAM
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 6 GB & ABOVE
                                                            </li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 4GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 3GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 2GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 1GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 512MB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> LESS THAN
                                                                512MB</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed " type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        COMPANIES
                                                    </button>

                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <form>
                                                            <input type="search" placeholder="search..." />
                                                        </form>
                                                        <ul className="list-group">
                                                            <li className="list-group-item"><i className="bi bi-box"></i> OPPO </li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> RENO</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> VIVO</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> REDMI</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> MOTOROLA</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> SAMSUNG</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> I-PHONE</li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-10 col-sm-12">
                                        {/* <!-------image slider--> */}
                                        <div id="mobileproductslider" className="carousel slide carousel-fade mb-2 slidertop"
                                            data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0" className="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>

                                            <div className="carousel-inner">
                                                <div className="carousel-item " data-bs-interval="3000">
                                                    <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100" />

                                                </div>
                                                <div className="carousel-item" data-bs-interval="3000">
                                                    <img src="http://wallpaperping.com/wp-content/uploads/2019/08/blog-img1-the-3d-photo-editor-for-your-honor-view20.jpg" className="d-block w-100" />
                                                </div>

                                                <div className="carousel-item active" data-bs-interval="3000">
                                                    <img src="https://www.hihonor.com/content/dam/honor/global/blog/2019/how-to-take-good-photos-with-honor-20/blogs-fb-how-to-take-good-photos-with-honor-20.jpg" className="d-block w-100" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev " type="button" href="#mobileproductslider"
                                                data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" type="button" href="#mobileproductslider"
                                                data-bs-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>


                                        {/* <!-------image slider--> */}
                                        <div className="container-fluid picker aboutpadding">
                                            <div className="row med">
                                                <div className="col-lg-6 col-sm-12">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-25 h-100 mx-auto how trance" />
                                                        <h3 className="h5 mt-2">Samsung Galaxy M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up the
                                                            bulk of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-25 h-100 mx-auto rance" />
                                                        <h3 className="h5 mt-2">Samsung Note Y12</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up the
                                                            bulk of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <!---------- <div className="container-fluid bg-warning p-5">--> */}
                                            <div className="row mt-4 med">
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/redmi.jpg" alt="Mobile-vivo"
                                                                className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Redmi 10pro</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/samsung.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Samsung Galaxy M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/samsung2.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Samsung Note M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>


                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/oppoa31.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo A 80+</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <!--------   <div className="container-fluid bg-info p-5">--> */}
                                            <div className="row mt-4 med">
                                                <div className="col-lg-3 col-sm-6 med">
                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/oppoa74.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo 74+ 5G</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">
                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/vivo.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo Y12 s</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/y31.jpg" alt="Mobile-vivo"
                                                                className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Vivo y31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>


                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/mobile.jpeg" alt="Mobile-vivo"
                                                                    className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">One Plus A40</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="navigation aboutpaddings justify-content-center d-flex mt-2">
                                                <ul className="pagination inmedia">
                                                    <li className="list-group-item mar">1</li>
                                                    <li className="list-group-item mar">2</li>
                                                    <li className="list-group-item mar">3</li>
                                                    <li className="list-group-item mar">4</li>
                                                    <li className="list-group-item mar">5</li>
                                                    <li className="list-group-item mar">6</li>
                                                    <li className="list-group-item mar">7</li>
                                                    <li className="list-group-item mar">8</li>
                                                    <li className="list-group-item mar">9</li>
                                                    <li className="list-group-item mar">10</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!---------footer section--> */}
                            <div className="footer-dark">
                                <footer>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-3 item">
                                                <h3>Services</h3>
                                                <ul>
                                                    <li><a href="#">Web design</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Hosting</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-md-3 item">
                                                <h3>About</h3>
                                                <ul>
                                                    <li><a href="#">Company</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 item text">
                                                <h3>Company Name</h3>
                                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem
                                                    lacus. Ut vehicula
                                                    rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                                    pulvinar dictum
                                                    vel in justo.</p>
                                            </div>
                                            <div className="col item social"><a href="#"><i className="bi bi-facebook fb"></i></a><a
                                                href="#"><i className="bi bi-twitter tw"></i></a><a href="#"><i
                                                    className="bi bi-instagram insta"></i></a><a href="#"><i
                                                        className="bi bi-whatsapp ws"></i></a></div>
                                        </div>
                                        <p className="copyright">Metro Labs © 2018</p>
                                    </div>
                                </footer>
                            </div>
                        </div>
                        {/* <!---------------------------NEW PROJECTS IN DYNAMIC TAB  ------------------------------------------> */}

                        {/* <!---------------------------------------------------ALL PROJECTS IN DYNAMIC TAB----------------------> */}
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <center>
                                <h1 align="center">PAWAN KALYAN</h1>
                                {/* <img width="30%" height="600px" border="1" align="right" hspace="10" vspace="30"
                                                                        src="https://i.pinimg.com/originals/1c/7c/11/1c7c117a12a64b1e21e5cbf003a0147a.jpg"
                                                                        className="sest"> */}
                                <h3 style={{ color: 'rgb(6, 243, 77);' }}>EARLY LIFE</h3>
                                <p>
                                    Pawan Kalyan born Konidela Kalyan Babu 2 September 1971 is an Indian actor, director,
                                    screenwriter, stunt coordinator, philanthropist, and politician. His film works are
                                    predominantly in Telugu cinema. He is the youngest brother of the popular actor Chiranjeevi.
                                    Kalyan made his acting debut in the 1996 Telugu film Akkada Ammayi Ikkada Abbayi. In 1998,
                                    he starred in Tholi Prema, which won the National Film Award for Best Feature Film in Telugu
                                    for that year.
                                </p>
                                <hr />
                                <h3 style={{ color: 'rgb(248, 26, 10);' }}>FILM CAREER</h3>
                                <p>
                                    Referred to as "Power Star" by his fans, Kalyan is known for films such as Gokulamlo Seeta,
                                    Suswagatham, Tholi Prema,Thammudu, Badri, Kushi, Jalsa, Gabbar Singh, Gopala Gopala and
                                    Attarintiki Daredi.[4] He received the Filmfare Award for Best Actor – Telugu for Gabbar
                                    Singh while Attarintiki Daredi held the record of being the highest grossing Telugu film.He
                                    was listed 26th in 2013, 69th in 2017 and 24th in 2018 respectively in the Forbes India list
                                    of top 100 Celebrities. He produces films under the banners Anjana Productions and Pawan
                                    Kalyan Creative Works.
                                </p>

                                <p >
                                    In March 2014 Pawan Kalyan entered into politics, founding the Jana Sena Party.During that
                                    period, Kalyan was listed by Google as the most searched Indian celebrity politician on
                                    Google Search.He is widely known for his philanthropic work.He founded a charitable trust
                                    called Common Man Protection Force (CMPF). This trust was known to assist citizens who fall
                                    under EWS in states of Telangana and Andhra Pradesh.He holds black belt in karate and
                                    specialized in various martial arts which he depicts in his films regularly.
                                </p>

                                <p>
                                    Kalyan was born as Konidela Kalyan Babu to Konidela Venkat Rao and Anjana Devi in Bapatla,
                                    Andhra Pradesh.He is the younger brother of Chiranjeevi and Nagendra Babu. He started using
                                    the name "Pawan" after a martial arts presentation he organized to demonstrate his
                                    training.[18] He holds a black belt in karate.He is also the uncle of actors Ram
                                    Charan,Varun Tej,Sai Dharam Tej and Allu Arjun.
                                </p>

                                <p >
                                    In 1998, Tholi Prema was released and won a National Award and six Nandi Awards.This movie
                                    was directed by A. Karunakaran and produced by G. V. G. Raju.After Tholi Prema, Kalyan acted
                                    in Thammudu, playing the role of a kick boxer. Thammudu was released on 15 July 1999 and was
                                    written and directed by P. A. Arun Prasad.In 20 April 2000, he acted in Puri Jagannadh's
                                    first directorial venture Badri.Produced by T. Trivikrama Rao and music composed by Ramana
                                    Gogula
                                    <br /><br />
                                    In 2001, he acted in the film Kushi. The film was released on 27 April 2001 and was directed
                                    by S. J. Suryah, which became a huge hit in that year.[citation needed] In 2001, he was the
                                    brand ambassador for Pepsi at the time his brother Chiranjeevi was promoting Coca-Cola.His
                                    next film Johnny, written and directed by himself, released on 26 April 2003. Kalyan also
                                    starred in the film, along with Renu Desai, produced by Allu Aravind and music composed by
                                    Ramana Gogula.
                                    <br /><br />
                                    In 2004, his film Gudumba Shankar was released. The film was directed by Veera Shankar and
                                    produced by Pawan's brother Nagendra Babu under Anjana Productions banner. The film's script
                                    and screenplay were written by Kalyan and he also choreographed three songs in this film and
                                    actions scenes were conceived and choreographed by him. In 2005, the film Balu, directed by
                                    A. Karunakaran was released. This was Karunakaran's second film with Kalyan after Tholi
                                    Prema. This film was produced by C. Ashwini Dutt under Vyjayanthi Movies banner.
                                    <br /><br />
                                    In 2006, Bangaram, directed by Tamil director Dharani was released. During March 2006,
                                    Kalyan launched his second directorial venture Satyagrahi, produced by A. M. Rathnam, which
                                    would be a tale questioning the atrocities in society. After spending a few months on
                                    pre-production by signing with P. C. Sreeram and A. R. Rahman, the film was later suddenly
                                    shelved.Later that year, he appeared in Annavaram, directed by Bhimaneni Srinivasa Rao.
                                    Asin, and Sandhya were cast alongside Pawan in the film and the film was produced under
                                    Super Good Films. The film was released on 29 December 2006 and collected ₹23 crore (US$3.2
                                    million) 3 weeks and ₹300 million (US$4.2 million) in 70 Days.The film was a remake of the
                                    Tamil film Thirupaachi. Kalyan also choreographed the song "Neevalle Neevalle" in this film.
                                    <br /><br />
                                    In 2008, Jalsa, directed by Trivikram Srinivas and produced by Allu Aravind was released on
                                    2 April. This film got the highest first-day collection in Telugu film history and was also
                                    the first for any regional film in south India in a single state by that time.Jalsa turned
                                    out to be the highest grosser of 2008 in Telugu cinema.was written and directed by S. J.
                                    Suryah and released in 2010. An official announcement was made in the same year that Kalyan
                                    was going to play a small role in a movie about Jesus Christ directed by Singeetam Srinivasa
                                    Rao.[31] In 2011, he appeared in Teen Maar, a remake of Love Aaj Kal, directed by Jayanth C.
                                    Paranjee.[32] He also appeared in Vishnuvardhan's gangster film Panjaa
                                    <br /><br />
                                    In 2012, he appeared in Gabbar Singh, a remake of Dabangg, directed by Harish Shankar.The
                                    film successfully completed 100 days and stood as the second highest-grossing Telugu film
                                    that time.After this film, he worked in Puri Jagannadh's Cameraman Gangatho Rambabu.

                                    In 2013, he appeared in Trivikram Srinivas's Attarintiki Daredi. The film, released on 27
                                    September 2013, faced problems with piracy as half of the movie was leaked to the internet
                                    prior to its release.In spite of this the movie was a blockbuster in 2013. The movie
                                    completed 100 days in 33 theaters and held the record of the highest-grossing film in
                                    Tollywood by that time, surpassing the previous record of Magadheera.
                                    <br /><br />
                                    In 2014, a Star India survey ranked Kalyan as one of the Top 5 Heroes of India.In 2015, he
                                    appeared in Gopala Gopala, a Telugu remake of OMG – Oh My God!.The movie featured Kalyan
                                    starring alongside Venkatesh and was directed by Kishore Kumar Pardasani. In 2016, Kalyan's
                                    Sardaar Gabbar Singh, a sequel to his 2012 film Gabbar Singh received poor reviews from
                                    critics.[citation needed] Katamarayudu (2017), a remake of Tamil film Veeram marked his
                                    second collaboration with Kishore Kumar Pardasani. In 2018, he appeared in the film
                                    Agnyaathavaasi directed by Trivikram Srinivas. This marked Kalyan's 25th film.

                                    In 2020, he made a comeback to films by appearing in Vakeel Saab, directed by Venu Sriram.
                                    He has also started shooting for Hari Hara Veera Mallu with director Krish scheduled to be
                                    released in 2022. Mythri Movie Makers also announced a film with Kalyan under the direction
                                    of Harish Shankar
                                    <hr />
                                    <h3 style={{ color: 'rgb(8, 163, 235);' }}>POLITICAL CAREER</h3>
                                    Pawan Kalyan started his political career in 2008[42] as the president of Yuvarajyam,the youth
                                    wing of Praja Rajyam Party which was started by his elder brother Chiranjeevi. He neither
                                    contested in elections nor did he hold any constitutional post during his days in Praja Rajyam
                                    Party. Later, in 2011, when Chiranjeevi merged his party with Congress,Kalyan took a break from
                                    political life, expressing his silent discontent with his brother's decision to merge the party,
                                    and started a new political party in 2014 called Jana Sena Party.
                                    <br /><br />
                                    Pawan Kalyan founded a political party named Jana Sena Party on 14 March 2014.He wrote a book
                                    titled Ism which is also the ideology of the Jana Sena party.He met with then BJP Prime
                                    ministerial candidate Narendra Modi to discuss the issues related to both the Telugu states and
                                    extended his support.He campaigned extensively for the Telugu Desam Party (TDP) and BJP alliance
                                    in Andhra Pradesh and Telangana. He opposed Congress party's rule stating the slogan Congress
                                    Hatao, Desh Bachao.His rallies drew what the Deccan-Journal called "huge crowds" in Andhra
                                    Pradesh and Telangana.In August 2017, he announced that he intended to enter full-time politics
                                    starting October 2017 once he completes his film commitments.[51]
                                    <br /><br />
                                    "Pawan Kalyan's talk touched my heart. My soul said that if there are youth like Pawan Kalyan,
                                    the Telugu spirit can never die. Telangana and Seemandhra can both prosper under someone like
                                    him"
                                    —Prime Minister Narendra Modi about Pawan Kalyan
                                    He provoked the Uddanam kidney disease crisis by various protests and a hunger strike, which was
                                    later controlled by the Government of Andhra Pradesh by constructing dialysis centres and
                                    implementing various schemes for the village.In November 2016, Kalyan announced that Jana Sena
                                    will contest in the 2019 general elections in Andhra Pradesh.He stated that he was planning to
                                    contest from all 175 legislatures of Andhra Pradesh without any alliance.He opposed central
                                    government's move to privatise Dredging Corporation of India (DCI)[57] on a golden platter.Pawan
                                    lead a protest march to condolence farmers who committed suicides or migrated from the
                                    drought-prone regions of Rayalaseema.He opposed the TDP Government's decision on land
                                    pooling.Kalyan conducted a march on the historical Dowleswaram Barrage in Rajahmundry demanding
                                    political accountability.[61] He exposed the alleged unchecked mining in the reserve forest area
                                    at Vanthada village of Prathipadu in East Godavari district
                                    <br /><br />
                                    Pawan Kalyan has announced the Jana Sena party's 2019 election manifesto at Rajahmundry public
                                    meeting with many measures to improve the lives of farmers,farm labourers, women, youth and
                                    students. His party would contest together with left parties Communist Party of India, Communist
                                    Party of India (Marxist) and Bahujan Samaj Party for the upcoming 2019 elections in both Telugu
                                    states of Andhra Pradesh and Telangana.
                                    <br /><br />
                                    The Jana Sena Party has contested from 140 constituencies in the 2019 Andhra Pradesh Legislative
                                    Assembly elections. Kalyan has contested from two constituencies – Gajuwaka and Bhimavaram.He
                                    has lost in both to candidates from YSR Congress Party.His party was able to win from Razole,
                                    making it the only seat it has won in the election.Later the same year, on 3 November 2019,
                                    Pawan Kalyan lead a long march in Visakhapatnam in support of construction workers against YSR
                                    Congress Party governance who have been facing unemployment due to shortage of supply of sand in
                                    Andhra Pradesh
                                    <br /><br />
                                    On 16 January 2020, Kalyan has announced his party's alliance with BJP, after three years of
                                    distancing from it. Both the parties would fight together in the upcoming elections in 2024.On
                                    12 February 2020, he lead a rally for justice to Sugali Preethi, a 15-year-old girl who was
                                    brutally raped and murdered, in Kurnool. He demanded an enquiry by Central Bureau of
                                    Investigation (CBI) into the incident.
                                </p>
                                <hr />
                                <h3 style={{ color: 'rgb(247, 184, 12);' }}>VIDEOS</h3>
                                <br />
                                {/* <iframe align="center" width="100%" height="500" src="https://www.youtube.com/embed/IyzeJl72QSc"
                                                                    className="sestyoutube"></iframe> */}
                                <br />
                                <hr />
                                <h3 style={{ color: 'blue;' }}>LOCATION</h3>
                                {/* <iframe
                                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.470262473833!2d78.29624671482674!3d17.43719198804872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930e64b1addb%3A0x75c5b235156ecc5f!2sPawan%20kalyan!5e0!3m2!1sen!2sin!4v1618564629205!5m2!1sen!2sin"
                                                                    width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                                                                    className="sestmaps"></iframe>" */}
                            </center>



                        </div>
                        {/* <!---------------------------------------------------ALL PROJECTS IN DYNAMIC TAB-------------------------------------> */}

                        {/* <!--------------------------------------------PERSONAL PROJECT IN DYNAMIC TAB--------------------------------------> */}
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="container-fluid bg-dark text-white">
                                <div className="container-fluid bg-dark text-white margincontact">
                                    <div className="row">
                                        <div className="col-lg-3  col-sm-12 col-12 rest mt-1">
                                            <h2>Find us</h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that</p>
                                            <p><i className="bi bi-arrow-bar-right"></i> 9878/25 sec 9 rohini45</p>
                                            <p><i className="bi bi-phone"></i> 9875968426</p>
                                            <p><i className="bi bi-envelope"></i> metrolabs@gmail.com</p>
                                        </div>
                                        <div className="col-lg-3 col-sm-12 col-12 rest">
                                            <h2>Quick Links</h2>

                                            <p>image rectouching</p>
                                            <p>clip pathing</p>
                                            <p>hallow manage</p>
                                            <p>amazon</p>
                                            <p>hair masking/clipping</p>
                                            <p>image croping</p>

                                        </div>
                                        <div className="col-lg-3  col-sm-12 col-12 rest mt-1">
                                            <h2>Quick Links</h2>

                                            <p>remove background</p>
                                            <p>shadow reflection</p>
                                            <p>logo</p>
                                            <p>vectorization</p>
                                            <p>hair masking/clipping</p>
                                            <p>image crapping</p>

                                        </div>
                                        <div className="col-lg-3  col-sm-12 col-12 mt-1">
                                            <h2>Follow Us</h2>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>

                                        </div>
                                    </div>
                                    <hr />

                                    <p className="text-center">copyright@2017/company name</p>

                                    <p className="text-center mal"><i className="bi bi-facebook m-3"></i> <i
                                        className="bi bi-twitter m-3"></i>
                                        <i className="bi bi-instagram m-3"></i> <i className="bi bi-whatsapp m-3"> </i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!--------------------------------------PERSONAL SECTION IN DYNAMIC TABS-----------------------------------------------> */}
                    </div>
                </div>
            </div>

        </>)
    }
}
export default Portfolio