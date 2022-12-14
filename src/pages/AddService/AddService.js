import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import "./AddService.css";

const AddService = () => {
  const [addService, setAddService] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addService);

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const photoURL = form.photoURL.value;
    console.log(name, price, photoURL, description);
    form.reset();

    fetch("https://service-review-server-one.vercel.app/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Container className="addServ">
        <h2>This is add service section</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <br />
          <input type="text" placeholder="PhotoURL" name="photoURL" />
          <br />
          <input type="text" placeholder="Price" name="price" />
          <br />
          <input type="text" placeholder="Description" name="description" />
          <br />
          <button className="btn btn-info mt-4">Submit</button>
        </form>
      </Container>
    </div>
  );
};

export default AddService;
