import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const {logOut , admin , user} = useAuth();
    return (
        <div className="container container-fluid">
            <div className="row g-5 vh-100">
               <div className="col-12 col-lg-2 dashbg">
             {!admin && <div>
              <Nav.Link as={HashLink} className="menuBar dash" to="/mybookings">My Orders</Nav.Link><br />
               <Nav.Link as={HashLink} className="menuBar dash" to="/home#reviews">Add Review</Nav.Link><br />
               <Nav.Link as={HashLink} className="menuBar dash" to="/payment">Payment</Nav.Link>
              </div>}
               <br />
               {
      admin && <div>
          <Nav.Link as={HashLink} className="menuBar dash" to="/allbookings">Manage Orders</Nav.Link>
          <Nav.Link as={HashLink} className="menuBar dash" to="/add-service">Add Product</Nav.Link>
          <Nav.Link as={HashLink} className="menuBar dash" to="/allbookings">Add Admin</Nav.Link>
          <Nav.Link as={HashLink} className="menuBar dash" to="/manageProducts">Manage Products</Nav.Link>
      </div>
      }
    
      <div>
           <Navbar.Text>
           <Button onClick={logOut} className=" fw-bold btn" variant="">Logout <i className="fas fa-sign-in-alt"></i></Button>
           </Navbar.Text></div> 
           
               </div>
               <div className="col-12 col-lg-10">
               <h2 className="dashboard-heading">Welcome to Find Jersey!</h2>
               <div className="row">
               <img className="col-8 col-md-6 mx-auto" src="https://image.flaticon.com/icons/png/512/1082/1082925.png" alt="" />
               </div>
               </div>
            </div>
            
        </div>
    );
};

export default Dashboard;