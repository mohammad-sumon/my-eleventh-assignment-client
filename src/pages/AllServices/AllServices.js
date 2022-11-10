import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import AllServicesDetails from "../AllServicesDetails/AllServicesDetails";
import "./AllServices.css";

const AllServices = () => {
  useTitle('AllServices');
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://service-review-server-one.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Container>
        <h3 className="text-center my-3">
          SAM Kitchen's all services are here
        </h3>
        <div className="allService">
          {services.map((service) => (
            <AllServicesDetails
              key={service._id}
              service={service}
            ></AllServicesDetails>
          ))}
        </div>

      </Container>
    </div>
  );
};

export default AllServices;
