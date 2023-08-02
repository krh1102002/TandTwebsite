import React, { useState } from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import "../Styles/login.css";
const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section style={{padding:"0px"}}>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="Login Img" style={{width:"100%"}} />
                </div>

                <div className="login__form" style={{width:"44%"}}>
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                  </div>

                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      id="number"
                      placeholder="Mobile No"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
