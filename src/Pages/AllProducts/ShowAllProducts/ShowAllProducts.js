import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({service}) => {
    return (
        <div className="card service text-center mt-5 mx-auto col-3">
        <img src={service.img} alt="" />
       <h4>{service.name}</h4>
        <p>{service.description}</p>
        <Link to={`/service/${service._id}`}>
        <button className="btn btn-light">Purchase <i class="fas fa-shopping-cart"></i></button>
        </Link>
       
    </div>
    );
};

export default ShowAllProducts;