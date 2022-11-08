import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePageServices = ({ service }) => {
  return (
    <div>
      <Card className="w-full shadow-xl">
        <Card.Img variant="top" src={service.img} alt=""/>
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>BDT: {service.price}</Card.Text>
          <Card.Text>{service.descripton}</Card.Text>
          <Button variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageServices;
