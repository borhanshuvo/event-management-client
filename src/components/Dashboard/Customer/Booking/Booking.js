import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import Payment from '../Payment/Payment';

const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [bookingData, setbookingData] = useState(null);

    useEffect(() => {
        fetch(`https://rocky-plains-06049.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);

    const onSubmit = (data) => {
        data.name = loggedInUser.displayName;
        data.email = loggedInUser.email;
        data.title = service.title;
        data.description = service.description;
        data.price = service.price;
        setbookingData(data);
    }

    const handelPaymentSuccess = paymentId => {
        const email = loggedInUser.email;
        const bookingDetails = {
            email,
            bookingData,
            paymentId,
            status: 'Pending',
            orderTime: new Date()
        };

        fetch('https://rocky-plains-06049.herokuapp.com/addBooking', {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
          })
        .then(res=>res.json())
        .then(result=>{
           
        })
    }

    const headingColor = { color: '#3A4256' };
    return (
        <div className="ps-4">
            <div style={{ display: bookingData ? 'none' : 'block' }}>
                <h4 className="pt-3 pb-5" style={headingColor}>Booking</h4>
                <div className="card" style={{ width: '70%' }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group pb-3">
                                <label htmlFor="displayName" className="pb-2">Display Name</label>
                                <input type="text" name="displayName" defaultValue={loggedInUser.displayName} id="displayName" className="form-control" />
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="email" className="pb-2">Email</label>
                                <input type="email" name="email" defaultValue={loggedInUser.email} id="email" className="form-control" />
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="title" className="pb-2">Event Title</label>
                                <input type="text" name="title" defaultValue={service.title} id="title" className="form-control" />
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="address" className="pb-2">Address</label>
                                <input type="text" name="address" placeholder="Address" aria-invalid={errors.address ? "true" : "false"} {...register('address', { required: true })} id="address" className="form-control" />
                                {errors.address && (<span role="alert" className="text-danger"> This field is required </span>)}
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="phone" className="pb-2">Phone Number</label>
                                <input type="text" name="phone" placeholder="Phone Number" aria-invalid={errors.phone ? "true" : "false"} {...register('phone', { required: true })} id="phone" className="form-control" />
                                {errors.phone && (<span role="alert" className="text-danger"> This field is required </span>)}
                            </div>
                            <div className="form-group pb-3 d-flex justify-content-between">
                                <span>Your service charged will be {service.price} taka</span>
                                <input type="submit" name="submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: bookingData ? 'block' : 'none' }}>
                <h4 className="pt-3 pb-5" style={headingColor}>Payment</h4>
                <div className="card" style={{ width: '70%' }}>
                    <div className="card-body">
                        <div className="form-group pb-3">
                            <label htmlFor="" className="pb-3">Payment</label>
                            <Payment handelPayment={handelPaymentSuccess}></Payment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;