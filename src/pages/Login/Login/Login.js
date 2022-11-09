import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const { googleSignIn, signIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        // alert("Successfully Login");
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Container>
        <h2 className="my-4 text-center">Login Now!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-danger d-block">{error}</Form.Text>
          </Form.Group>
          <div className="text-center">
            <Button className="mb-3" variant="primary" type="submit">
              Login
            </Button>
            <p>
              Don't have an account? <Link to="/register">Register Now</Link>{" "}
            </p>
          </div>

          <div className="text-center mt-4">
            <p>
              <small>You can also Sign Up with</small>
            </p>
            <hr className="w-50 mx-auto" />
            <button
              onClick={handleGoogleSignIn}
              className="me-2 btn btn-primary"
            >
              <FaGoogle className="me-2"></FaGoogle>Google
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
