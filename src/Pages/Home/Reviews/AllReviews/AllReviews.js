import React from 'react';
import Rating from 'react-rating';

import './AllReviews.css';


const AllReviews = (props) => {
    const {comment, name, ratings} = props.review;
    
    return (
        <div className="reviews">
            <hr/>
               <small className="text-muted fw-bold">{name}</small><br />
               <small className="text-muted">{comment}</small><br />
               <small><Rating
                    initialRating={ratings}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                >
                </Rating>
                </small>
        </div>
    );
};

export default AllReviews;