import React, { useState } from "react";
import "../Styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import herovideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../Services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import experienceImg from ".././assets/images/experience.png";
import MasonaryImgGallery from "../components/Image-gallery/masonaryImgGallery";
const Home = () => {
  const [counterOn, serCounterOn] = useState(false);
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World Img" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora animi consectetur dolore quisquam perferendis non
                  earum distinctio consequatur quasi provident. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Architecto,
                  consectetur.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="Img of actor" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video
                  src={herovideo}
                  controls
                  autoPlay
                  loop
                  alt="Img of actor"
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="Img of actor" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* hero section start  */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitile">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start  */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* experiance section  */}
      <ScrollTrigger
        onEnter={() => serCounterOn(true)}
        onExit={() => serCounterOn(false)}
      >
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience__content">
                  <Subtitle subtitle={"Experience"} />
                  <h2>
                    with our all experience <br /> we will serve you
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum
                    dolor sit amet aljf.
                  </p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={50} delay={0} duration={3} />
                      )}
                      k+
                    </span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={20} delay={0} duration={3} />
                      )}
                      k+
                    </span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={15} delay={0} duration={3} />
                      )}
                    </span>
                    <h6>Years Experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImg} alt="Img of person" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollTrigger>

      {/* gallery section start  */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customer's tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonaryImgGallery/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
