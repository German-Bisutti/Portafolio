import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Yo soy <span className="purple">German </span>
            Soy de
            <span className="purple"> Buenos Aires, Argentina </span>.
            <br />
            <br />
            Me encanta programar y solucionar problemas en el ambito de la
            programacion, aunque no me llevo bien con los estilos hago lo que
            puedo con eso.Me gusta jugar videojuegos y hacer deporte como ir al
            gym o jugar al Football con mis amigos
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            Mas sobr <strong className="purple">mi </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            Mi
            <span className="purple"> educacion</span> estudie en
            <span className="purple"> psychology</span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iusto rerum a nobis. Accusantium,
            tenetur illum exercitationem ea sunt mollitia non ipsum soluta.
            Atque minima perferendis pariatur laboriosam doloremque quae natus?.
            But
            <span className="purple"> Bootcamp</span>. Estudie en Henry
            <span className="purple"> un par de años </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            provident quod architecto deleniti pariatur numquam fuga eius ex
            illum itaque, veniam, beatae et illo inventore ducimus! Nostrum
            veritatis quis repudiandae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit, officia, perferendis quaerat aspernatur
            iste eius dolor id, cum adipisci odio inventore maxime cupiditate
            consequatur repellat quidem minus quae delectus eligendi.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
