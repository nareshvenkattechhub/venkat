import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Donate() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Support Our Cause</h2>
      <Form>
        <Form.Group controlId="formAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" min="1" step="any" />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Donate Now
        </Button>
      </Form>
    </Container>
  );
}

export default Donate;
