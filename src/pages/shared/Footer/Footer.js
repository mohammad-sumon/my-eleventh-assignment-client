import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container className="text-center">
        <Row className="p-4">
          <Col>
            <h5>SAM Kitchen</h5>
            <p className="mb-0">The real homemade flavor foods are here.</p>
            <div>
            <small>1/2/3 Dhaka, Bangladesh</small>
            <br />
            <small>Phone: 012549605</small>
            <br />
            <small>Email: sam@kitchen.com</small>
            </div>
          </Col>
          <Col>
            <div>
              <h5>Connect with Me!</h5>
              <div>
                <FaFacebook className="ms-3"></FaFacebook>
                <FaTwitter className="ms-3"></FaTwitter>
                <FaInstagram className="ms-3"></FaInstagram>
              </div>
            </div>
          </Col>
        </Row>
        <small>
          {" "}
          &copy; All right reserved by{" "}
          <span style={{ color: "white" }}>Mohammad Sumon</span> copyright act
          2022.
        </small>
      </Container>
    </div>
  );
};

export default Footer;
