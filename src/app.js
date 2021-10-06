// import first from 'ee-first';
import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import About from './about'
import Education from './education'
import Portfolio from './portfolios'
import Services from './services'
import Contact from './contact'
import Navbar from './navbar'
import Image from './image'
import Skills from './skills'
import Footer from './footer'
import Props from './props'
import Reactboot from './reactbootstrap'
// import Pagenot from './pagenotfound'
// import Maps from './arraylist'
import APi from './Importapi'
import Nestedapis from './nestedapi'
import Form from './form'
import Signup from './signup'
import Nestededit from './signupedit'
import Blog from './blog'
import Firebase from './firebasesiignup'
import Usestates from './hooksapi'
import Hooksview from './hooksapiview'
import Hooksedit from './hooksapiedit'
import Hookssign from './hoosksignupapi'
import Reduxhooks from './hooksredux'

// import Reduxes from './usingredux'
// import Materia from './material'

// import Material from './tutorial'
// import Accordian from './nestedaccordian'

export default function App() {
    return (<>

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Image} />
                <Route exact path="/image" component={Image} />
                <Route exact path="/about" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/reactapi" component={APi} />
                <Route exact path="/props" component={Props} />
                <Route exact path="/forms" component={Form} />
                <Route exact path="/reactbootstrap" component={Reactboot} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/hookssignup" component={Usestates} />
                <Route exact path="/hookssignup/view/:idno" component={Hooksview} />
                <Route exact path="/hookssignup/edit/:idno" component={Hooksedit} />
                <Route exact path="/hookssignupapi" component={Hookssign} />
                <Route exact path="/reduxhooks" component={Reduxhooks} />




                <Route exact path="/reactapi/view/:id" component={Nestedapis} />
                <Route exact path="/reactapi/edit/:id" component={Nestededit} />

                <Route exact path="/signup" component={Signup} />
                <Route exact path="/firebase" component={Firebase} />



                {/* <Route component={Pagenot} /> */}
                <Redirect to="/image" />''
            </Switch>
            <Footer />


            {/* <Reduxes /> */}
            {/* <Accordian /> */}

            {/* <Material /> */}
            {/* <Maps /> */}
            {/* <Materia /> */}
        </BrowserRouter>
    </>)
}
