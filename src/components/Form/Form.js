import React from "react";
import { useForm } from "../../customHooks/useForm";

const Form = ({ sendEmail }) => {
  const {
    formValues,
    email_address,
    email_name,
    email_message,
    handleInput,
    resetForm,
  } = useForm({
    email_address: "",
    email_name: "",
    email_message: "",
  });

  const handleSubmit = (e) => {
    const noEmptyInput = Object.values(formValues).every(
      (value) => value.length
    );
    e.preventDefault();
    if (noEmptyInput) {
      sendEmail(e);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <h2>CONTACTAME</h2>
      <label htmlFor="email_address">Dirección de Correo:</label>
      <input
        required
        value={email_address}
        onChange={handleInput}
        type="email"
        name="email_address"
        id="email_address"
      />
      <label htmlFor="email_name">Nombre:</label>
      <input
        required
        value={email_name}
        onChange={handleInput}
        type="text"
        name="email_name"
        id="email_name"
      />
      <label htmlFor="email_message">Mensaje:</label>
      <textarea
        required
        value={email_message}
        onChange={handleInput}
        name="email_message"
        id="email_message"
        cols="30"
        rows="10"
      ></textarea>
      <button className="email_button">ENVIAR</button>
    </form>
  );
};

export default Form;
