import { Container } from "react-bootstrap";
import ProfilePic from "../assets/img/Perfil CV.jpeg";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <Container>
        <img src={ProfilePic} alt="profilepic" />
        <h1>hello world</h1>
      </Container>
    </section>
  );
};
