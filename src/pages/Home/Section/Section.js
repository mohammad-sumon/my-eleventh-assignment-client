import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../../assets/a1.jpg";
import img2 from "../../../assets/s1.jpg";
import img3 from "../../../assets/s2.jpg";
import img4 from "../../../assets/s3.jpg";
import img5 from "../../../assets/s4.jpg";


const Section = () => {
  return (
    <Container>
        {/* First extra section */}
        <h3 className="text-center my-4">Homemade flavor at your door NOW!</h3>
        <hr />
      <Row>
        <Col className="text-center">
          <img src={img1} alt="" className="w-50 rounded" />
        </Col>
        <Col>
          <div>
            <h4>
              Wanna <span style={{ color: "purple" }}>Taste</span> Real Homemade
              Flavor?
            </h4>
            <p>
              <span style={{ color: "purple" }}>SAM Kitchen</span> prepared food
              at home are way better than cooked in restaurants, hotels or
              someplace else. There are various health benefits of homemade
              food. The first and the most important reason why homemade meals
              is excellent for health is that homemade food is hygienic. I will
              provide you the best degree of cleanliness that’s possible. When
              we’re eating in restaurants or hotels, we cannot be sure of the
              hygienic environment. Homemade food is usually prepared with
              natural ingredients compared to commercially prepared food.
              Plainly, the food has its taste however those are ready using
              unprocessed foods that are by no means healthy.
            </p>
          </div>
        </Col>
      </Row>
      {/* Second extra section */}
      <div className="my-5 text-center">
        <h3>Why you will choose <span style={{ color: "purple" }}>SAM Kitchen</span></h3>
        <hr />
        <Row>
            <Col>
                <p>Save Money</p>
                <img src={img2} alt="" className="w-50 rounded" />
            </Col>
            <Col>
                <p>Quick Service</p>
                <img src={img3} alt="" className="w-50 rounded"/>
            </Col>
            <Col>
                <p>Freshness</p>
                <img src={img4} alt="" className="w-50 rounded"/>
            </Col>
            <Col>
                <p>Hygenic</p>
                <img src={img5} alt="" className="w-50 rounded"/>
            </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section;
