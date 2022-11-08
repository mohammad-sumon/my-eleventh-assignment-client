import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const AllServicesDetails = ({ service }) => {
  return (
    <Container>
        <Card className="w-full shadow-xl">
        <Card.Img className="w-96" variant="top" src={service.img} alt="" />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>BDT: {service.price}</Card.Text>
          <Card.Text>{service.descripton}</Card.Text>
          <Button variant="primary"><Link className="text-white text-decoration-none" to={`/allServices/${service._id}`}>View Details</Link> </Button>
        </Card.Body>
      </Card>
     
    </Container>
  );
};

export default AllServicesDetails;
