import React from "react";
import "../Styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import herovideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png"
import SearchBar from "../shared/SearchBar";
import ServicesList from "../Services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know Before You Go"}/>
                    <img src={worldImg} alt="World Img" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora animi consectetur dolore quisquam perferendis non earum distinctio consequatur quasi provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, consectetur.</p>
              </div>
            </Col>
            <Col lg="2">
                <div className="hero_img-box">
                    <img src={heroImg} alt="Img of actor" />
                </div>
            </Col>
            <Col lg="2">
                <div className="hero_img-box mt-4">
                    <video src={herovideo} controls autoPlay loop alt="Img of actor" />
                </div>
            </Col>
            <Col lg="2">
                <div className="hero_img-box mt-5">
                    <img src={heroImg02} alt="Img of actor" />
                </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      {/* hero section start  */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitile">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
      </section>
  {/* featured tour section start  */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tour-title">
                Our featured tours
              </h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
