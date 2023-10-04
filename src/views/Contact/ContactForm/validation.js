export function validate(input) {
  let errors = {};

  if (!input.email || !input.email.trim()) {
    errors.email = "El campo de email no puede estar vacío.";
  } else if (!isValidEmail(input.email)) {
    errors.email = "El formato del email es inválido.";
  } else if (input.email.length > 50) {
    errors.email = "El email no puede exceder los 50 caracteres.";
  } else {
    errors.email = "";
  }

  if (!input.enterprise || !input.enterprise.trim()) {
    errors.enterprise = "El campo de email no puede estar vacío.";
  } else if (input.enterprise.length > 20) {
    errors.email = "El email no puede exceder los 20 caracteres.";
  } else {
    errors.enterprise = "";
  }

  if (!input.message || !input.message.trim()) {
    errors.message = "El campo de mensaje no puede estar vacío.";
  } else if (input.message.length > 300) {
    errors.message = "El mensaje no puede exceder los 300 caracteres.";
  } else {
    errors.message = "";
  }

  return errors;
}

function isValidEmail(email) {
  // Utilizar una expresión regular para validar el correo electrónico
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}
