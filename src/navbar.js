import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (<>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-info" aria-current="page" to="/image">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-warning" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/education">education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-primary" to="skills">skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-info" to="/portfolio">portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/services">ser</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/contact">contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/reactapi">api</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/props">prop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/reactbootstrap">Rboot</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/blog">reduxconnection</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/signup">signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/firebase">Firebase</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/hookssignup">Hooksapi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/forms">Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/hookssignupapi">Hsignup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="bg-success" to="/reduxhooks">ReduxHook</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>)
    }
}
export default Navbar