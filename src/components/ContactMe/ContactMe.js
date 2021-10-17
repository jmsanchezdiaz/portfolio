import "./ContactMe.scss";
import { sendForm } from "emailjs-com";
import { useState } from "react";
import Form from "../Form/Form";

const ContactMe = () => {
  const [wasError, setWasError] = useState(false);
  const [wasSend, setWasSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    sendForm(
      process.env.REACT_APP_SERVICE_KEY,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_USER_ID
    ).then(
      (result) => {
        setWasSend(true);
      },
      (error) => {
        setWasError(true);
      }
    );
  };

  return (
    <section id="Contactame" className="contactame">
      <div className="email">
        <Form sendEmail={sendEmail} />
      </div>

      {wasSend ? (
        <h2 className="contactame__msg">
          MENSAJE ENVIADO, PRONTO TE RESPONDERE.
        </h2>
      ) : wasError ? (
        <h2 className="contactame__msg-error">
          HA OCURRIDO UN ERROR, VUELVA A INTENTAR.
        </h2>
      ) : (
        <h2 className="contactame__msg">ESPERO QUE TRABAJEMOS JUNTOS.</h2>
      )}
    </section>
  );
};
export default ContactMe;
