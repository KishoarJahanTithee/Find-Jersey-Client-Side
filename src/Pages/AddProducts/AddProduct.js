import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  const [name, setName] = useState("")
  const [des, setDes] = useState("")
  const [image, setImage] = useState("")

    const submitUserInfo = (e) => {

        e.preventDefault();
        fetch("http://localhost:5000/add-service", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name:name, description:des, img:image }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Successfully added.");
              e.target.reset();
            }
          });
  };

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <Form mt-5 onSubmit={(e)=>submitUserInfo(e)}>
        <h2 className='mt-5'>Book This Services</h2>
        <hr />
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Service Name'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Service Description'
              onChange={(e) => setDes(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' controlId='formGridAddress'>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              onChange={(e) => setImage(e.target.value)}
              placeholder='Image url'
              id='image'
            />
          </Form.Group>
        </Row>

        <Button variant='dark' type='submit'>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;