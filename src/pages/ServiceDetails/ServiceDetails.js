import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const [displayService, setDisplayService] = useState(service);
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
      </Container>
    </div>
  );
};

export default ServiceDetails;
