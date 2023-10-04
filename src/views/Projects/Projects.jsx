import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCart/ProjectCart";
import games from "../../assets/games.png";
import Rick from "../../assets/Rick.jpg";
import indumentaria from "../../assets/Espacio-Flipante.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Algunos de mis <strong className="purple">Proyectos </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indumentaria}
              title="E-commers-Indumentaria"
              description="Espacio Flipante es un emocionante e-commerce de indumentaria.El proyecto utiliza tecnologías como Firebase para la verificación y el almacenamiento, una Postgres para el seguimiento de datos de órdenes y productos, JavaScript y Redux para la lógica de la aplicación, React para la interfaz de usuario, Express para la gestión de servidores y rutas, y HTML y CSS para el diseño y la maquetación web. 🚀"
              ghLink="https://github.com/German-Bisutti/E-commers-Indumentaria"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              title="Videogames Api"
              description="videogames api PI"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rick}
              title="Rick and Morty App"
              description=""
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
