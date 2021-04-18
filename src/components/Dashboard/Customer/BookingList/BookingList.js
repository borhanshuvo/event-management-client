import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const BookingList = () => {
    const headingColor = { color: '#3A4256' };
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://rocky-plains-06049.herokuapp.com/bookingList?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            });
    }, [loggedInUser.email]);

    return (
        <div className="ps-4">
            <h4 className="pt-3 pb-5" style={headingColor}>Booking List</h4>
            <div className="container">
                <div className="row">
                    {
                        bookings.map(booking =>
                            <div key={booking._id} className="col-md-6 pb-3">
                                <div className="card" style={{width: '60%'}}>
                                    <div className="card-header d-flex justify-content-between">
                                        <span style={{ padding: '5px' }}>Price : {booking.bookingData.price}</span>
                                        <span className="bg-primary text-white" style={{ padding: '5px' }}>{booking.status}</span>
                                    </div>
                                    <div className="card-body">
                                        <h5>{booking.bookingData.title}</h5>
                                        <small>{booking.bookingData.description}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;