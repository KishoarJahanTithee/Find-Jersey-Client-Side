import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import ShowAllProducts from './ShowAllProducts/ShowAllProducts';


const AllProducts = () => {
    const {admin} = useAuth();
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://floating-dusk-18796.herokuapp.com/all-services')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])

    return (
        <div>
            <div className="mt-5 service-header">
       <h2>Our <span>Collections</span></h2><hr className="w-50 mx-auto"></hr>
        </div>
        <div className="service-container row d-flex text-center mx-auto">
            {
                services.map(service =><ShowAllProducts
                key={service._id}
                name={service.name}
                service={service}
                ></ShowAllProducts>
               )
            }
        </div>
        {
        admin && <NavLink to="/add-service" className="btn btn-dark mb-5"><i className="fas fa-plus"></i> Add Product</NavLink>
        }
        </div>
    );
};

export default AllProducts;