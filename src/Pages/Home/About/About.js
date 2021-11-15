import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about" id="about">
           <h1 className="mt-5 pt-5"><span>Services</span> We Provide</h1>
           <div className="card mb-3 teamCard mx-auto text-center">
  <div className="row g-0">
    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg" className="img-fluid" alt=""/>
      <h6 className="card-title">Verified Product</h6>
      <p>We are promised to give you the best quality of product.</p>
    </div>

    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg" className="img-fluid" alt=""/>
      <h6 className="card-title">Fastest Delivary</h6>
      <p>We will try our best to delivar the product at the shortest time.</p>
    </div>

    <div className="col-md-4 oneMember">
      <img src="https://image.freepik.com/free-vector/man-delivering-food-while-wearing-medical-mask_52683-39764.jpg" className="img-fluid" alt=""/>
      <h6 className="card-title">Order 24/7</h6>
      <p>You can order your product at any time from our website. We delivar all over bangladesh.</p>
    </div> 

  </div>
</div>
        </div>
    );
};

export default About;