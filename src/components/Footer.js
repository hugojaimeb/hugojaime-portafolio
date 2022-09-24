import { Row } from "react-bootstrap";
import footerImg from "../assets/img/github.png";

export const Footer = () => {
  return (
    <section>
      <Row>
        <h1 className="h1footer">Desing and Build By Hugo Jaime ©</h1>
      </Row>
      <Row>
        <div className="footerlogo">
          <a
            href="https://github.com/hugojaimeb"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              data-aos="flip-left"
              src={footerImg}
              alt="reactlogo"
              className="footerlogo"
            />
          </a>
        </div>
      </Row>
    </section>
  );
};
