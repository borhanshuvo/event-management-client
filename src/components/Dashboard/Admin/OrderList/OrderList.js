import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const OrderList = () => {
    const headingColor = { color: '#3A4256' };
    const { handleSubmit } = useForm();
    const [bookings, setBookings] = useState([]);
    const [loadData, setLoadData] = useState({});
    const [newStatus, setNewStatus] = useState(null);

    useEffect(() => {
        fetch('https://rocky-plains-06049.herokuapp.com/allBookingList')
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            });
    }, []);

    const handelLoadBooking = (id) => {
        fetch(`https://rocky-plains-06049.herokuapp.com/bookingDataById/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoadData(data);
            });
    }

    const handelChange = (e) => {
        e.target.name = e.target.value;
        setNewStatus(e.target.name);
    }

    const onSubmit = (data) => {
        const id = loadData._id;
        const status = newStatus;
        const bookingStatus = { status };

        fetch(`https://rocky-plains-06049.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingStatus)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setLoadData({});
                    //window.location.reload();
                }
            })

    }

    return (
        <div>
            {loadData.email &&
                <div className="ps-3">
                    <h4 className="pt-3 pb-5 ps-3" style={headingColor}>Edit Status</h4>
                    <div className="card" style={{ width: '70%' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group pb-3">
                                    <label htmlFor="" className="pb-2">Status</label>
                                    <select name="status" className="form-control" onChange={handelChange}>
                                        <option className="form-control" value={loadData.status}>{loadData.status}</option>
                                        <option className="form-control" value="OnGoing">OnGoing</option>
                                        <option className="form-control" value="Done">Done</option>
                                        <option className="form-control" value="Pending">Pending</option>
                                    </select>
                                </div>

                                <div className="form-group pb-3">
                                    <input type="submit" name="submit" value="Save Changes" className="btn btn-primary" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            }

            <div className="ps-3">
                <h4 className="pt-3 pb-5 ps-3" style={headingColor}>Booking List</h4>
                <div className="container">
                    <div class="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map(booking => (
                                        <tr key={booking._id}>
                                            <td>{booking.bookingData.name}</td>
                                            <td>{booking.bookingData.email}</td>
                                            <td>{booking.bookingData.title}</td>
                                            <td>{booking.status}</td>
                                            <td><button style={{ border: 'none' }} onClick={() => handelLoadBooking(booking._id)}>EDIT</button></td>
                                            {/* <form>
                                            <select name="status" onChange={handelChange}>
                                                <option value="{booking.status}">{booking.status}</option>
                                                <option value="Done">Done</option>
                                                <option value="OnGoing">OnGoing</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        </form> */}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderList;