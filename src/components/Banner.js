import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import newHeaderImg from "../assets/img/new-header-img.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "Full Stack Developer",
    "I ♥ Coding.",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my WebSite</span>
            <h1>
              {`Hi! I'm Hugo `}
              <br></br>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I create amazing Web sites and web apps for people around the
              world 🚀 Based in Colombia, I'm an Industrial Engieenier and a
              technology fan, some day a friend of mine pushed me to start
              coding and then I couldn't stop. 👨🏾‍💻
              <br />
              <br />
              When i'm not coding, i'm playing Video games🎮 or Rugby🏉
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={newHeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
