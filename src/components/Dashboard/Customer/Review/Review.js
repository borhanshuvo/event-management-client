import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newRating, setNewRating] = useState('');

    const handelRating = (e) => {
        const rating = e.target.value;
        setNewRating(rating);
    }

    const onSubmit = (data, e) => {
        data.created = new Date();
        data.rating = newRating;

        fetch('https://rocky-plains-06049.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.reset();
                }
            })
    }
    const headingColor = { color: '#3A4256' };
    return (
        <div className="ps-4">
            <h4 className="pt-3 pb-5" style={headingColor}>Review</h4>
            <div className="card" style={{ width: '70%' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group pb-3">
                            <label htmlFor="name" className="pb-2">Name</label>
                            <input type="text" name="name" defaultValue={loggedInUser.displayName} placeholder="Your Name" aria-invalid={errors.name ? "true" : "false"} {...register('name', { required: true })} id="name" className="form-control" />
                            {errors.name && (<span role="alert" className="text-danger"> This field is required </span>)}
                        </div>

                        <div className="form-group pb-3">
                            <label htmlFor="description" className="pb-2">Description</label>
                            <input type="text" name="description" placeholder="Description" aria-invalid={errors.description ? "true" : "false"} {...register('description', { required: true })} id="description" className="form-control" />
                            {errors.description && (<span role="alert" className="text-danger"> This field is required </span>)}
                        </div>

                        <div className="form-group pb-3">
                            <label htmlFor="rating" className="pb-2">Rating</label>
                            <select name="rating" id="rating" className="form-control" onChange={handelRating}>
                                <option selected value="">Please Give Rating</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>

                        <div className="form-group pb-3">
                            <input type="submit" name="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;