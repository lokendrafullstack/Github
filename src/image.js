import React from 'react';
import reactDom from 'react-dom';
import Images from './assets/images/portfolio.jpg'
import { Link } from 'react-router-dom'


class Image extends React.Component {
    render() {

        return (<>
            <div className="image">
                <img src={Images} className="imageinresponsive" />
            </div>

            <div className="textimage itbt">
                <h3 className="sp">HI, I'M LOKENDRA</h3>
                <h1 className=" mt-2 sp1">I'M A FULL STACK DEVELOPER</h1>
                <Link to="/portfolio" className="btn btn-primary text-white p-2">view portfolio</Link>

            </div>
        </>)
    }
}
export default Image