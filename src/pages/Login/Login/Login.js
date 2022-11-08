import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('');

    
  return (
    <div>
      <Container>
        <h2 className="my-4 text-center">Login Now!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-danger d-block">
            {error}
          </Form.Text>
          </Form.Group>
          <div className="text-center">
            <Button className="mb-3" variant="primary" type="submit">
              Login
            </Button>
            <p>Don't have an account? <Link to='/register'>Register Now</Link> </p>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
