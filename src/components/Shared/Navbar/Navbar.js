import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/event_logo.png';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-5 pb-5">
                <div className="container-fluid ">
                    <Link className="navbar-brand ps-5" to="/"><img src={logo} style={{width: '100px'}} alt=""/><b>EVENT MANAGEMENT</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end">
                        <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase fs-5" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase fs-5" aria-current="page" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase fs-5" aria-current="page" href="#review">Customer Review</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase fs-5" aria-current="page" href="#contact_us">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase fs-5" aria-current="page" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-uppercase fs-5" aria-current="page" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;