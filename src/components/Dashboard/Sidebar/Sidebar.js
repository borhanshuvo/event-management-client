import { faCartPlus, faCommentAlt, faList, faPlus, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/event_logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://rocky-plains-06049.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email]);

    const headingColor = { color: '#3A4256' };
    const textColor = { color: '#3A3056' };
    return (
        <div className="container">
            <div className="pb-5">
                <Link className="nav-link" to="/"><img className="ms-5" src={logo} style={{ width: '100px' }} alt="" />
                    <h5 style={headingColor}>EVENT MANAGEMENT</h5></Link>
            </div>
            {isAdmin &&
                <div>
                    <Link style={textColor} className="nav-link" to="/dashboard/orderList"><FontAwesomeIcon icon={faList} /> Booking List</Link>
                    <Link style={textColor} className="nav-link" to="/dashboard/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                    <Link style={textColor} className="nav-link" to="/dashboard/addAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                    <Link style={textColor} className="nav-link" to="/dashboard/manageService"><FontAwesomeIcon icon={faTasks} /> Manage Service</Link>
                </div>
            }
            {!isAdmin &&
                <div>
                    <Link style={textColor} className="nav-link" to="/dashboard/book"><FontAwesomeIcon icon={faCartPlus} /> Booking</Link>
                    <Link style={textColor} className="nav-link" to="/dashboard/bookingList"><FontAwesomeIcon icon={faList} /> Booking List</Link>
                    <Link style={textColor} className="nav-link" to="/dashboard/review"><FontAwesomeIcon icon={faCommentAlt} /> Review</Link>
                </div>
            }
        </div>
    );
};

export default Sidebar;