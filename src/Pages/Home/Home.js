import React from 'react';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageOrders from '../ManageOrders/ManageOrders';
import About from './About/About';
import Banner from './Banner/Banner';
import GiveFeedback from './GiveFeedback/GiveFeedback';
import AllReviews from './Reviews/AllReviews/AllReviews';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
           <Services></Services>
           <About></About>
           <GiveFeedback></GiveFeedback>
          <Reviews></Reviews>
           <AdminRoute path="/allbookings">
              <ManageOrders></ManageOrders>
            </AdminRoute>
        </div>
    );
};

export default Home;