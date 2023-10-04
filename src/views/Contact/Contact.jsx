import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm/ContactForm";
import myImg from "../../assets/email.png";
import Tilt from "react-parallax-tilt";
function Contact() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={4}
            style={{
              paddingTop: "5px",
              paddingBottom: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centra horizontalmente
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "5px" }}>
              Enviame un <strong className="purple">mensajen</strong>
            </h1>
          </Col>
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{ width: "200px" }}
            />
          </Tilt>
        </Row>
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </Container>
  );
}

export default Contact;
