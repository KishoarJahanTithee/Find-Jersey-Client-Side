import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetail.css';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import PlaceOrder from './PlaceOrder';


const ProductDetail = () => {
    const {serviceId} = useParams();

    const [servicesDetails, setServicesDetails] = useState([])
        useEffect( () => {
            fetch(`https://floating-dusk-18796.herokuapp.com/service-details/${serviceId}`)
            // fetch(`https://afternoon-hamlet-58966.herokuapp.com/service-details/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data));
        } ,[])

    // let ProductDetail = servicesDetails.find((service) => service._id === serviceId);

    return (
        <div className="knowServiceDetail mb-5">
            <div className=" row">
            <div className="col-md-6"><img src={servicesDetails.img} alt=" " /></div>
            <div className="col-md-6 mt-5">            
            <h2>{servicesDetails.name}</h2>
            <p>{servicesDetails.description}</p>
            <Nav.Link as={HashLink} className="book-btn btn mx-auto" to={`/service/${serviceId}#bookservice`}>ORDER NOW</Nav.Link>
            </div>
            </div>
        
            <div>
              <PlaceOrder serviceDetails={servicesDetails}></PlaceOrder>
            </div>
        
        </div>
        
    );
};

export default ProductDetail;