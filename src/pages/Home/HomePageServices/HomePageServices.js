import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HomePageServices = ({ service }) => {
  return (
    <div>
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
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageServices;
