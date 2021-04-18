import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://rocky-plains-06049.herokuapp.com/allReviewList')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const headingColor = { color: '#3A4256' };
    const textColor = { color: '#3A3056' };

    return (
        <div className="bg-light pt-5">
            <div className="container pt-5 pb-">
                <div className="row pb-5">
                    <h4 className="text-center pb-3" style={textColor}><u>Reviews</u></h4>
                    <h1 className="text-center pb-5" style={headingColor}>Our Customer Reviews</h1>
                    {
                        reviews.map(review =>
                            <div key={review._id} className="col-md-4 pb-3">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p className="card-text pb-2" style={textColor}>{review.description}</p>
                                        <h5 className="card-title text-uppercase pb-3" style={headingColor}>{review.name}</h5>
                                        <small style={textColor}>Ratting : {review.rating} / 5</small>
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

export default Review;