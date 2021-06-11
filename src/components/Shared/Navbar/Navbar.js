import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/event_logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="pb-5">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light pt-5 pb-5">
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
            </nav> */}
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link className="navbar-brand" to="/"><img src={logo} className="image-fluid" alt="" /><b>EVENT MANAGEMENT</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="mx-auto"></div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link text-uppercase fs-5" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-uppercase fs-5" href="#service">Service</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-uppercase fs-5" href="#review">Customer Review</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-uppercase fs-5" href="#contact_us">Contact</a>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-uppercase fs-5" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-uppercase fs-5" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;