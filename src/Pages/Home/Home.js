import React from 'react';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageOrders from '../ManageOrders/ManageOrders';
import About from './About/About';
import Banner from './Banner/Banner';
import GiveFeedback from './GiveFeedback/GiveFeedback';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    const {user} = useAuth();
    return (
        <div id="home">
            <Banner></Banner>
           <Services></Services>
           <About></About>
           {
               user?.email && <GiveFeedback></GiveFeedback>
           }
          <Reviews></Reviews>
           <AdminRoute path="/allbookings">
              <ManageOrders></ManageOrders>
            </AdminRoute>
        </div>
    );
};

export default Home;