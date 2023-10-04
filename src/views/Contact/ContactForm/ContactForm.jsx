import React, { useState, useRef } from "react";
import { validate } from "./validation";
import Form from "react-bootstrap/Form";
import { GrSend } from "react-icons/gr/";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  //Estados - Locales
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    enterprise: "",
  });

  //Funciones
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "email_german_bisutti",
        "template_ggmp5yp",
        form.current,
        "EOMNWv-EKZwgGrqkK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validate({ ...formData, [name]: value })[name],
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const validation = validate(formData);
    if (Object.values(validation).some((error) => error)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Completa correctamente los campos",
        footer: "",
      });
      return;
    }

    Swal.fire({
      title: "Mensaje Email",
      text: "Seguro quieres enviar este mensaje?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        sendEmail();
        setFormData({
          email: "",
          message: "",
          enterprise: "",
        });
      }
    });
  };

  return (
    <Form ref={form} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre o Empresa</Form.Label>
          <Form.Control
            name="enterprise"
            type="enterprise"
            placeholder="Nombre / Empresa"
            value={formData.enterprise}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
          {errors.enterprise && (
            <span style={{ color: "darkred" }}>{errors.enterprise}</span>
          )}
        </div>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div>
        {errors.email && (
          <span style={{ color: "darkred" }}>{errors.email}</span>
        )}
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          name="message"
          type="message"
          as="textarea"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div>
        {errors.message && (
          <span style={{ color: "darkred" }}>{errors.message}</span>
        )}
      </div>

      <li className="social-icons">
        <button
          value="Send"
          type="submit"
          className={`icon-colour home-social-icons button-send-email`}
          style={{
            border: "none", // Eliminar bordes del botón
            display: "flex", // Usar flexbox para centrar contenido
            alignItems: "center", // Centrar verticalmente
            justifyContent: "center", // Centrar horizontalmente
            textAlign: "center", // Alinear texto en el centro
          }}
        >
          <GrSend />
        </button>
      </li>
    </Form>
  );
};
export default ContactForm;
