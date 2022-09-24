import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Project1 from "../assets/img/projecto1.png";
import Project2 from "../assets/img/projecto2.png";
import Project3 from "../assets/img/projecto3.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="projects" id="projects">
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
          <Col className="colproject">
            <div className="projectdiv">
              <img
                src={Project1}
                alt="project1"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">Vicenteperez.com</div>
                <p className="projectdesc">
                  Profesional profile website for Vicente perez lawyer.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://vicente-perez.web.app/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="projectdiv">
              <img
                src={Project3}
                alt="project3"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">OlaplexBOG</div>
                <p className="projectdesc">
                  Corporate logo and image for a online marketplace.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://www.instagram.com/olaplexbog/?hl=es-la"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="projectdiv">
              <img
                src={Project2}
                alt="project2"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">Film Finder</div>
                <p className="projectdesc">
                  Selects a category and calls an external API for shows a
                  random movie.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://hugojaimeb.github.io/Random-Film/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="projectdiv">
              <img
                src={Project1}
                alt="project1"
                data-aos="fade-down"
                className="projectsimg"
              />
              <div className="projectoverlay">
                <div className="projecttittle">VicentePerezg.com</div>
                <p className="projectdesc">
                  Profesional profile website for Vicente perez lawyer.
                </p>
                <div className="buttondiv">
                  <a
                    href="https://vicente-perez.web.app/"
                    className="buttonproject"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
