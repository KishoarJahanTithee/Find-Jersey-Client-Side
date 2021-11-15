import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = ({ serviceDetails }) => {

  const history = useHistory();

  const { user } = useAuth();


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.serviceName = serviceDetails.name;
    data.serviceId = serviceDetails._id;
    data.status = 'pending';


    fetch('http://localhost:5000/add-order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // fetch('https://afternoon-hamlet-58966.herokuapp.com/add-order', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Order has been confirmed!');
          reset();
          history.push('/mybookings')
          // setAlreadyBooked(!alreadyBooked);
        }
      })
  }

  return (
    <div id="bookservice" className="bookService mt-5">
      <Form mt-5 onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mt-5">Book This Services</h2>
        <hr />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              defaultValue={user?.displayName}
              {...register("userName")}
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              {...register("email")}
              readOnly
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Address"
            {...register("address")}
          />
          {/* <Form.Control ref={statusRef} hidden value="pending" /> */}
        </Form.Group>
        <Button variant="dark" type="submit">
          BOOK
        </Button>
      </Form>
    </div>
  );
};

export default PlaceOrder;