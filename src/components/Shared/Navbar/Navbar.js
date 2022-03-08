import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/event_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <header className="pb-5">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="image-fluid" alt="" />
            <b>EVENT MANAGEMENT</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link text-uppercase fs-5" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a className="nav-link text-uppercase fs-5" href="#service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link text-uppercase fs-5" href="#review">
                  Customer Review
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link text-uppercase fs-5" href="#contact_us">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-uppercase fs-5" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              {!loggedInUser?.email ? (
                <li class="nav-item">
                  <Link className="nav-link text-uppercase fs-5" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <button
                    style={{ border: "none", backgroundColor: "white" }}
                    className="nav-link text-uppercase fs-5"
                    onClick={() => {
                      setLoggedInUser({});
                      localStorage.removeItem("userInfo");
                    }}
                  >
                    <span className="ps-1">Logout</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
