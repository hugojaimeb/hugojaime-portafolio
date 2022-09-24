import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form
              type="form"
              action="https://formsubmit.co/hugojaime.104@gmail.com"
              method="post"
            >
              <Row>
                <Col sm={6} className="px-2">
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-2">
                  <input type="text" name="Last Name" placeholder="Last Name" />
                </Col>
                <Col sm={6} className="px-2">
                  <input type="email" name="Email" placeholder="Email Adress" />
                </Col>
                <Col sm={6} className="px-2">
                  <input type="tel" name="Phone" placeholder="Phone Number" />
                </Col>
                <Col>
                  <textarea row="6" name="message" placeholder="message" />
                  <input type="submit" value="Submit"></input>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://github.com/hugojaimeb"
                  ></input>
                  <input type="hidden" name="_captcha" value="false"></input>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
