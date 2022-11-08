import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../assets/b1.jpg";
import img2 from "../../../assets/b2.jpg";
import img3 from "../../../assets/b3.jpg";

const Banner = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 rounded-2" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded-2" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded-2" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
