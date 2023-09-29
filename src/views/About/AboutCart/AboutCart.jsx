import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Germán</span>. Soy de
            <span className="purple"> Buenos Aires, Argentina 🧉</span>.
            <br />
            <br />
            Me encanta programar y solucionar problemas en el ámbito de la
            programación 💻, aunque no me llevo bien con los estilos, hago lo
            que puedo con eso. Me gusta jugar videojuegos y hacer deporte, como
            ir al gym o jugar al fútbol ⚽ con mis amigos.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            Más sobre <strong className="purple">mí</strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            Actualmente estoy viviendo en
            <span className="purple"> Liniers</span>. Mis estudios secundarios
            los terminé en la
            <span className="purple"> Escuela Técnica Saavedra</span>, en la
            cual desarrollé muchas habilidades técnicas y blandas para el
            trabajo y la vida cotidiana. Mi padre es Licenciado en Marketing y
            mi madre es Veterinaria, recibida en la UBA. Yo personalmente estoy
            estudiando
            <span className="purple"> Ingeniería en Sistemas</span> 📚. También
            la mayor parte de mis conocimientos vienen de parte del
            <span className="purple"> BootCamp Henry</span>, en el cual
            desarrollé mis saberes y realicé algunos de mis primeros
            <span className="purple"> Proyectos</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
