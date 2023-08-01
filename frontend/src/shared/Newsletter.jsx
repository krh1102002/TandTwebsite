import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maletourist from ".././assets/images/male-tourist.png";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter Your mail" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                id quis voluptate blanditiis, voluptatem sunt quasi ad earum
                possimus soluta?
              </p>
            </div>

          </Col>
          <Col lg="6">
            <div className="newsletter_img">
                <img src={maletourist} alt="maletourists" />
            </div>
          </Col>
          
                  </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
