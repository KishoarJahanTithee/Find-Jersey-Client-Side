import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%', height:'500px'}} src={notFound} alt="" />
            <Link to="/"><button className="btn goBack">Go Back</button></Link>
        </div>
    );
};

export default NotFound;