import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <li className="social-icons">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <BsGithub />
          </a>
        </li>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
