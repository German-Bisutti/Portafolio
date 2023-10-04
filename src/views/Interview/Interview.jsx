import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendly from "../../components/Calendly/Calendly";

function Interview() {
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
              Agenda una <strong className="purple">entrevista</strong>
            </h1>
          </Col>
        </Row>
      </Container>

      <Calendly
        url="https://calendly.com/germanbisutti?primary_color=183e70"
        styles={{ minWidth: "100%", height: "100%" }}
      />
    </Container>
  );
}

export default Interview;
