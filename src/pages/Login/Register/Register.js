import React, { useContext, useState } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
    
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            form.reset();
            alert("Successfully Register");
          })
          .catch((error) => {
            console.error(error);
            setError(error.message)
          });
      };


    return (
        <div>
            <Container>
        <h2 className="my-4 text-center">Register Now!</h2>
        <Form  onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="Enter Photo URL"
            />
          </Form.Group>

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
            <Button className='mb-3' variant="primary" type="submit">
              Register
            </Button>
            <p>Already have an account? <Link to='/login'>Login Now</Link> </p>
          </div>
        </Form>
      </Container>
        </div>
    );
};

export default Register;