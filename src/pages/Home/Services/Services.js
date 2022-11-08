import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HomePageServices from "../HomePageServices/HomePageServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Container className="my-4 text-center">
        <h2 className="mt-3" style={{color: 'purple'}}>My Services</h2>
        <hr />
        <div className="d-flex flex-sm-column flex-lg-row gap-3">
          {services.map((service) => (
            <HomePageServices
              key={service._id}
              service={service}
            ></HomePageServices>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-4">See All</button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
