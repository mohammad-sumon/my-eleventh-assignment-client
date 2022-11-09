import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


const AllServicesDetails = ({ service }) => {
  
  return (
    <Container>
        <Card className="w-full shadow-xl">

        <PhotoProvider>
        <PhotoView src={service.img}>
          <Card.Img className="w-96" variant="top" src={service.img} alt="" />
        </PhotoView>
      </PhotoProvider>
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
