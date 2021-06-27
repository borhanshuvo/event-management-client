import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
        <div id="review" className="bg-light pt-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h4 className="text-center pb-3" style={textColor}><u>Reviews</u></h4>
                    <h1 className="text-center pb-5" style={headingColor}>Our Customer Reviews</h1>
                    <Swiper spaceBetween={20} autoplay={{ "delay": 2500, "disableOnInteraction": false }} navigation={true} slidesPerView={1} loop={true} pagination={{ "clickable": true }}>
                        {
                            reviews.map(review =>
                                <SwiperSlide key={review._id}>
                                    <div className="pb-5">
                                        <div className="card p-5 m-auto w-75">
                                            <div className="card-body text-center">
                                                <p className="card-text pb-2" style={textColor}>{review.description}</p>
                                                <h5 className="card-title text-uppercase pb-3" style={headingColor}>{review.name}</h5>
                                                <small style={textColor}>Ratting : {review.rating} / 5</small>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;