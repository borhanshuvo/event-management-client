import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import infoEmoji from '../../../images/info-emoji.svg';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [show, setShow] = useState('block');
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage);
            })
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
        });
    }

    const handelSubmit = (event) => {

        const signedInUser = {
            isSignedIn: true,
            displayName: 'Admin',
            email: 'test@admin.com'
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
        event.preventDefault();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container pt-5 mt-5">
                <div className="row mt-5">
                    <div className="login-style">
                        <div style={{display: show}} className="card pb-2">
                            <div className="d-flex justify-content-between pb-2">
                                <strong><img src={infoEmoji} className="rounded me-2" alt="" />Important Information</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShow('none')}></button>
                            </div>
                            <div className="text-center">
                                <span>For Admin click on Sign in button.</span><br />
                                <span>For Customer click on Continue with Google button.</span>
                            </div>
                        </div>
                        {/* <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" onClose={() => setShow(false)} show={show} delay={5000}>
                            <div className="toast-header">
                                <img src={infoEmoji} className="rounded me-2" alt="" />
                                <strong className="me-auto">Important Info</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClose={() => setShow(true)}></button>
                            </div>
                            <div className="toast-body">
                                Use this email to see all admin features.
                            </div>
                        </div> */}
                        <h4 className="text-center">{newUser ? 'Registration' : 'Login'}</h4>
                        <br />
                        {
                            !newUser &&
                            <form onSubmit={handelSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" name="email" autoComplete="off" value="test@admin.com" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" autoComplete="off" value="12345678" className="form-control" />
                                </div>

                                <input type="submit" className="btn btn-primary form-control" value='Sign in' />

                            </form>
                        }
                        {
                            newUser &&
                            <form onSubmit={handelSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" name="displayName" autoComplete="off" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" name="email" autoComplete="off" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" autoComplete="off" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="rePassword" className="form-control" />
                                </div>

                                <input type="submit" className="btn btn-primary form-control" value='Sign up' />

                            </form>
                        }
                        <br />
                        <p className="text-center">{newUser ? 'Already have an Account?' : "Don't have account?"}<button name="newUser" onClick={() => setNewUser(!newUser)} style={{ border: "none", backgroundColor: "white", color: "blue" }}>{newUser ? 'Login' : 'Create a new Account'}</button></p>
                    </div>
                    <div className="text-center mt-4 mb-5" style={{ margin: 'auto' }}>
                        <p>----------Or----------</p>
                        <button onClick={googleSignIn} style={{ borderRadius: '10px', width: '30%', border: '1px solid gray' }}>
                            <span className="pe-2"><FontAwesomeIcon style={{ color: 'blue' }} icon={faGoogle} /> </span>
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;