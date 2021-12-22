import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { container } from './contact.module.css';
const Contact = () => {
  return (
    <div className={container}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 pt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ask me any questions or leave a feedback!</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
  )
}

export default Contact;