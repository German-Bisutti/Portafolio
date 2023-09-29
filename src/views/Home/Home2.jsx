import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/programer.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> CONTARTE </span> SOBRE MI
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              Soy un <b className="purple">Full Stack developer </b> que se
              espesializa en <b className="purple">Backend</b> development, me
              concentro en el funcionamiento y almacenamiento de los datos 👨🏻‍💻.
              <br />
              <br />
              Tambien manejo fluidamente el Front y diferentes tecnologias como{" "}
              <b className="purple">
                Javascript, React.js, Node.js, Git, Jest, SQL
              </b>{" "}
              y algunas mas 🚀 . Trato de terminar todos los trabajos y al mismo
              tiempo disfruitar de lo que hago sin perder la responabilidad.
              <br />
              <br />
              Cuando no estoy codeando trato de relajarme con mis amigos
              <b className="purple"> Jugando Football ⚽</b> o compartiendo con
              mi familia.Tambien soy amante del mate 🧉 y cocinar son cosas que
              me relajan.
              <br />
              <br />
              Realize algunos <b className="purple">Proyectos 💼</b>
              con compañeros mios y tambien de forma individual utilizando
              diferentes tecnologias y metodologias como la metodologia
              <b className="purple"> Scrum </b>. Con la cual tengo bastante
              experiencia.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>ENCONTRAME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/German-Bisutti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/german-bisutti/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
