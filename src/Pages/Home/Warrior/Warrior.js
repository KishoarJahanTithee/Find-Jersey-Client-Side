import React from 'react';
import './Warrior.css';

const Warrior = ({warrior}) => {
    const {img, name, specialist} = warrior;
    return (
        <div className="card text-center mx-auto col-3 doctor">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h6>{name}</h6>
            <small>{specialist}</small>
            </div>
        </div>
    );
};

export default Warrior;