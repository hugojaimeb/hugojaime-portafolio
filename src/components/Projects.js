import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Project1 from "../assets/img/projecto1.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="profile" id="profile">
      <Container>
        <h1 data-aos="fade-down" className="projectsh1">
          Projects
        </h1>
        <br />
        <p className="pprojects">
          Here is some projects what i Worked and the technologies what i apply,
          with Demo and Repository in My GitHub
        </p>
        <h2 className="h2projects">Web Pages / Apps / Desing</h2>
        <Row className="aligh-items-center">
          <Col>
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
          </Col>
          <Col>
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
          </Col>
          <Col>
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
            <img
              src={Project1}
              alt="project1"
              data-aos="fade-down"
              className="projectsimg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
