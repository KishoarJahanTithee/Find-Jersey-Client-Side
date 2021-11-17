import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])
        useEffect( () => {
            fetch('https://floating-dusk-18796.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => setServices(data));
        } ,[])

    return (
        <div id="services">
        <div className="mt-5 service-header">
       <h2><span>Top</span> Selling Products</h2>
        </div>
        <div className="service-container row d-flex text-center mx-auto">
            {
                services.slice(0,6).map(service =><Service
                key={service._id}
                name={service.name}
                service={service}
                ></Service>
               )
            }
        </div>
       
        </div>
    );
};

export default Services;