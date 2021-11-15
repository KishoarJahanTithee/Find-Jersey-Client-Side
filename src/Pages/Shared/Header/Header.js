import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut, admin} = useAuth();
    return (
          <>
  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home#home"><div className="d-flex"><div><h4 className="logo"><small className="tshirt"><i class="fas fa-tshirt"></i></small>FIND<br></br>JERSEY</h4></div><div className="questionMark">!</div></div></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} className="menuBar" to="/home#home"><i class="fas fa-house-user"></i></Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#services">Top Products</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/explore">Explore</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#about">Services</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#reviews">Reviews</Nav.Link>
      {/* <Nav.Link as={HashLink} className="menuBar" to="/mybookings">My Orders</Nav.Link> */}
     
      { user?.email ? 
      <div>
           <Nav.Link as={HashLink} className="menuBar" to="/dashboard">Dashboard</Nav.Link>
           <Navbar.Text>
           <a href="#login" className="text-muted">{user?.email}</a><Button onClick={logOut} className=" fw-bold" variant="">Logout <i className="fas fa-sign-in-alt"></i></Button>
           </Navbar.Text></div> 
           :
          <Nav.Link as={Link} className="text-dark fw-bold" to="/login"><i class="fas fa-user"></i> Login</Nav.Link>}
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>  

    );
};

export default Header;