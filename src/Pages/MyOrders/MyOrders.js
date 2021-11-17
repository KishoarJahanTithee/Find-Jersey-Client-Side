import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import img from '../../Images/myBookingNoResultFound.jpg'
import "../MyOrders/MyOrders.css";
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
  const [allorders, setAllorders] = useState([]);
  const [changeflag, setChangeflag] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    // fetch("https://afternoon-hamlet-58966.herokuapp.com/allorder")
    fetch("https://floating-dusk-18796.herokuapp.com/allorder")
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, [changeflag]);

  const DeleteService = (id) => {
    const permission = window.confirm("Are you sure ?");
    if (permission) {
      fetch(`https://floating-dusk-18796.herokuapp.com/delete-order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setChangeflag(!changeflag);
        });
    }
  };


  const usersOrders = allorders.filter((order) => order.email === user.email);
  

  return (
    <div className='my-bookings'>
      <h3>My Orders Details</h3>
      {usersOrders.length === 0 && (<div className="text-center"><img src={img} alt="" /></div>)}
      {usersOrders.map((order) => (
        <div className='row'>
          <div className='card my-order-card mx-auto col-md-6 col-10'>
            <div className='card-body d-flex row'>
              <div className='col-9 text-start'>
                <h5 className='card-title'>{order.serviceName}</h5>
                <p className='card-text'>{order.serviceId}</p>
                <p className='card-text text-white fw-bold'>
                  - {order.userName}
                </p>
                {order.status === 'pending' ? (<p className="status-red text-center">{order?.status}</p>) : (<p className="status-green text-center">{order?.status}</p>)}
              </div>
              <div className='buttons col-3'>
                <Button
                  variant=''
                  onClick={() => {
                    DeleteService(order._id);
                  }}
                >
                  <i className='far fa-times-circle cross-btn'></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;