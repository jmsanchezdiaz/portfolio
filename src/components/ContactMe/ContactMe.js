import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <main id="Contactame" className="contactame">
      <div className="email">
        <form action="">
          <h2>CONTACTAME</h2>
          <label htmlFor="email_adress">Dirección de Correo:</label>
          <input type="email" name="email_adress" id="email_adress" />
          <label htmlFor="email_theme">Asunto:</label>
          <input type="text" name="email_theme" id="email_theme" />
          <label htmlFor="email_message">Mensaje:</label>
          <textarea
            name="email_message"
            id="email_message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="email_button">ENVIAR</button>
        </form>
      </div>

      <h2 className="contactame__msg">ESPERO QUE TRABAJEMOS JUNTOS.</h2>
    </main>
  );
};
export default ContactMe;
