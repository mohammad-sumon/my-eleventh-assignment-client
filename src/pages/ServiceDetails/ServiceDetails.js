import React, { useContext, useState } from "react";
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  useTitle('ServiceDetails');
  const { user, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const service = useLoaderData();
  console.log(service);
  const [displayService, setDisplayService] = useState(service);

  // const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const message = form.message.value;
    console.log(name, photoURL, message);
    // alert("Review Successfull");
    form.reset();

    const review = {
      name,
      email,
      message,
      photoURL
    }

    fetch('http://localhost:5000/myReviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.acknowledged){
      alert('review successful');
      form.reset();
    }
  })
  .catch(err => console.error(err));

    // signIn(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     form.reset();
    //     setError("");
    //     alert("Successfully Login");
    //     navigate(from, {replace: true});
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setError(error.message);
    //   });
  };

  


  return (
    <div>
      <Container>
        <h1 className="text-center my-4">Here is the service details of: <span style={{color: 'purple'}}>{displayService.name}</span></h1>
        <Card>
          <Card.Img variant="top" src={displayService.img} />
          <Card.Body>
            <Card.Title>Item Name: {displayService.name}</Card.Title>
            <Card.Title>BDT: {displayService.price}</Card.Title>
            <Card.Text>Basic Info: {displayService.descripton} </Card.Text>
            <Card.Text>Details Info: {displayService.details} </Card.Text>
          </Card.Body>
        </Card>
        
        {/* Review section start */}
         <div>
          <h3 className="text-center my-4 text-info">Review Section</h3>
          <hr />
          <h4 className="text-center my-2">Please write a review of: <span style={{color: 'purple'}}>{displayService.name}</span></h4>


          <div>
            {user?.uid ? (
              <>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      defaultValue={user?.email}
                      readOnly
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="photoURL"
                      placeholder="Enter photoURL"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Please write your review here.</Form.Label>
                    <Form.Control
                      type="text"
                      name="message"
                      placeholder="Enter review"
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button className="mb-3" variant="primary" type="submit">
                      Submit Review
                    </Button>
                  </div>
                </Form>
              </>
            ) : (
              <>
              <div className="text-center my-3">
              <span>Please login to add a review</span>
                <Link className="text-decoration-none text-dark btn btn-info ms-2" to="/login">
                  Login
                </Link>

              </div>
              
              </>
            )}
          </div>
        </div>

      </Container>
    </div>
  );
};

export default ServiceDetails;
