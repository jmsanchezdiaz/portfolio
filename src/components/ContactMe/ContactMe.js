import './ContactMe.scss';
import { sendForm } from 'emailjs-com';
import { useContext, useState } from 'react';
import Form from '../Form/Form';
import { colors } from '../../colors';
import { DarkModeContext } from '../../Context/DarkModeContext';

const ContactMe = () => {
  const { isDarkModeOn } = useContext(DarkModeContext);
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
    <section
      style={{
        backgroundColor: isDarkModeOn ? colors.sunMainColor : '#fff',
        color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
      }}
      id="Contactame"
      className="contactame"
    >
      <div className="email">
        <Form sendEmail={sendEmail} />
      </div>

      {wasSend ? (
        <h2
          style={{
            color: 'rgb(130, 242, 106)',
          }}
          className="contactame__msg"
        >
          MENSAJE ENVIADO, PRONTO TE RESPONDERE. 🧾
        </h2>
      ) : wasError ? (
        <h2
          style={{
            color: '#f00',
          }}
          className="contactame__msg-error"
        >
          HA OCURRIDO UN ERROR, VUELVA A INTENTAR. ❌
        </h2>
      ) : (
        <h2 className="contactame__msg">ESPERO QUE TRABAJEMOS JUNTOS. ✋</h2>
      )}
    </section>
  );
};
export default ContactMe;
