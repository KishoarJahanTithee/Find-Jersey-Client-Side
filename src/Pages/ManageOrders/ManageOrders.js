import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import img from '../../Images/myBookingNoResultFound.jpg'
import MakeAdmin from "../Shared/Header/MakeAdmin/MakeAdmin";
import "./ManageOrders.css";

const ManageOrders = () => {

  const [orders, setOrders] = useState([]);
  const [updatef, setUpdatef] = useState(true);
  
   useEffect(() => {
    //  fetch("https://afternoon-hamlet-58966.herokuapp.com/allorder")
     fetch("https://floating-dusk-18796.herokuapp.com/allorder")
       .then((res) => res.json())
       .then((data) => setOrders(data));
   }, [updatef]);
  
  const DeleteService = (id) => {
    const permission = window.confirm("Are you sure ?");
    if (permission) {
      fetch(`https://floating-dusk-18796.herokuapp.com/delete-order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdatef(!updatef);
        });
    }
  }

  const updateService = (id) => {
    fetch(`https://floating-dusk-18796.herokuapp.com/order-update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdatef(!updatef);
      });
  };

  return (
    <div className='all-bookings container'>
      <MakeAdmin></MakeAdmin>
      <h2 className="mt-5">Manage Orders</h2>
      {orders.length === 0 && (<div className="text-center"><img src={img} alt="" /></div>)}
      {orders.map((order) => (
        <div className='row'>
          <div className='card all-order-card mx-auto col-md-6 col-10'>
            <div className='card-body d-flex row'>
              <div className='col-9 text-start'>
                <h6 className='card-title mt-2'>{order.userName}</h6>
                <small className='text-muted pt-5 mt-5'>{order.email}</small><br />
                <small className='text-muted card-text'>Service Id: {order.serviceId}</small>
                <h6 className='card-title mt-2'>{order.serviceName}</h6>
                {order.status === 'pending' ? (<p className="status-red text-center">{order?.status}</p>) : (<p className="status-green text-center">{order?.status}</p>)}
              </div>
              <div className='buttons col-3'>
                {order.status === 'pending' && <Button variant=''>
                  <i
                    className='far fa-check-circle tick-btn'
                    onClick={() => {
                      updateService(order._id);
                    }}
                  ></i>
                </Button>}
                <br />
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

export default ManageOrders;