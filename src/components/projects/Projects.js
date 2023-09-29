import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { projectRows } from "./projectsRows";
import "./Projects.scss";


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
          with Demo or online project and Repository in My GitHub
        </p>
        <h2 className="h2projects">Web Pages / Apps / Design</h2>
        <Row className="aligh-items-center">
  {projectRows.map((row, rowIndex) => (
    <Col key={rowIndex} className="colproject">
      {row.map((project, colIndex) => (
        <div key={colIndex} className="projectdiv">
          <img
            src={project.imageSrc}
            alt={`project${colIndex + 1}`}
            data-aos="fade-down"
            className="projectsimg"
          />
          <div className="projectoverlay">
            <div className="projecttittle">{project.title}</div>
            <p className="projectdesc">{project.description}</p>
            <div className="buttondiv">
              <a
                href={project.demoLink}
                className="buttonproject"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </Col>
  ))}
</Row>

      </Container>
    </section>
  );
};
