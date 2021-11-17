import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './GiveFeedback.css';

const GiveFeedback = () => {
    // const [comment, setComment] = useState("")
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
      data.email=user.email;
      // data.name=user.displayName;
      fetch('https://floating-dusk-18796.herokuapp.com/add-review', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then(result => {
              if (result.insertedId) {
                  alert('Thanks for your feedback!');
                  reset();
              }
          })
  }

  return (
    <div className='container d-flex justify-content-center align-items-center feedbackForm'>
      <Form mt-5 onSubmit={handleSubmit(onSubmit)}>
        <h2 className='mt-5'>Share Your Feedback With Us!</h2>
        <hr />
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Control className="form-feild"
              type='text'
              placeholder='Write your opinion here...'
              {...register('comment')}
              required
            />
            <Form.Control className="form-feild"
              type='text'
              placeholder='Write your name here...'
              defaultValue={user?.displayName}
              {...register('name')}
              required
            />
            <Form.Control className="form-feild"
              type='number'
              min='0'
              max='5'
              step='0.1'
              defaultValue='5'
              {...register('ratings')}
              placeholder='Rate here...'
              required
            />
          </Form.Group>
        </Row>

        <Button variant='' type='submit' className="btn btn-dark mb-5">
          Submit
        </Button>
      </Form>
      </div>
  );
};

export default GiveFeedback;