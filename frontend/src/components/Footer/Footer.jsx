import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './Footer.css'
const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];
const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <footer classname="footer" style={{paddingTop:"70px",paddingBottom:"30px" }}>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} style={{width:"68%",marginBottom:".6rem"}} alt="logo img" />
              <p>
                Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Maxime, voluptates.
                adipisicing elit. Suscipit, magnam nisi quidem qui aliquam esse?
              </p>
              <div className="social__links d-flex gap-4 align-items-center">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i
                      className="ri-instagram-fill"
                      style={{ color: "&#xEE65;" }}
                    ></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-whatsapp-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item,index) => (
                <ListGroupItem key={index} className="px-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item,index) => (
                <ListGroupItem key={index} className="px-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contacts</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                    Address:
                  </span>
                  <p className="mb-0">Hinganghat, Maharashtra</p>
                </h6>
              </ListGroupItem>
              <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                    Email:
                  </span>
                  <p className="mb-0">toursandtravel420@gmail.com</p>
                </h6>
              </ListGroupItem>
              <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                  <i class="ri-phone-line"></i>
                    Phone:
                  </span>
                  <p className="mb-0">8473736238</p>
                </h6>
              </ListGroupItem>
              
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">Copyright {year}, Design and developed by Kunal Hulke. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
