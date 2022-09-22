import { Container, Col, Row } from "react-bootstrap";
import ProfilePic from "../assets/img/Perfil CV.jpeg";
import JsLogo from "../assets/img/js.png";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5} className="profilecol">
            <img src={ProfilePic} alt="profilepic" />
          </Col>

          <Col xs={12} md={6} xl={7}>
            <h1 className="profileh1">Who Am I ? </h1>
            <br />
            <br />
            <p className="pprofile">
              My name is Hugo Jaime, I'm Industrial Engieenier and Front-end
              Developer, I worked creating Responsive, Adaptive and creative web
              sites, apps and Corporate image for diferent customers around the
              world.
            </p>
            <h2 className="profileh2">My Weapons Are :</h2>
            <img src={JsLogo} alt="jslogo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
