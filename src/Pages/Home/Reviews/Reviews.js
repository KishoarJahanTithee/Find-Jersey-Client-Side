import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews/AllReviews';
import './Review.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
        useEffect( () => {
            fetch('https://floating-dusk-18796.herokuapp.com/all-reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
        } ,[])

    return (
        <div className=" display-review" id="reviews">
        <div className="my-5">
       <h2>Our <span>Customers Feedback</span></h2>
        </div>
        <div className="service-container row d-flex text-center mx-auto">
            {
                reviews.map(review =><AllReviews
                key={review._id}
                review={review}
                ></AllReviews>
               )
            }
        </div>
        </div>
    );
};

export default Reviews;