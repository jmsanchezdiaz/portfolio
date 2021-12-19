import { useForm } from '../../customHooks/useForm';
import { useSpreadContext } from '../../customHooks/useSpreadContext';

const Form = ({ sendEmail }) => {
  const { isDarkModeOn, colors } = useSpreadContext();
  const {
    formValues,
    email_address,
    email_name,
    email_message,
    handleInput,
    resetForm,
  } = useForm({
    email_address: '',
    email_name: '',
    email_message: '',
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
        style={{
          backgroundColor: isDarkModeOn ? colors.moonBkgColor : '#fff',
          border: '2px solid',
          borderColor: isDarkModeOn
            ? colors.moonMainColor
            : colors.sunMainColor,
          color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
        }}
        required
        value={email_address}
        onChange={handleInput}
        type="email"
        name="email_address"
        id="email_address"
      />
      <label htmlFor="email_name">Nombre:</label>
      <input
        style={{
          backgroundColor: isDarkModeOn ? colors.moonBkgColor : '#fff',
          border: '2px solid',
          borderColor: isDarkModeOn
            ? colors.moonMainColor
            : colors.sunMainColor,
          color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
        }}
        required
        value={email_name}
        onChange={handleInput}
        type="text"
        name="email_name"
        id="email_name"
      />
      <label htmlFor="email_message">Mensaje:</label>
      <textarea
        style={{
          backgroundColor: isDarkModeOn ? colors.moonBkgColor : '#fff',
          border: '2px solid',
          borderColor: isDarkModeOn
            ? colors.moonMainColor
            : colors.sunMainColor,
          color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
        }}
        required
        value={email_message}
        onChange={handleInput}
        name="email_message"
        id="email_message"
        cols="30"
        rows="10"
      ></textarea>
      <button
        style={{
          color: isDarkModeOn ? colors.moonMainColor : '#FFF',
          backgroundColor: isDarkModeOn
            ? colors.moonBkgColor
            : colors.sunMainColor,
        }}
        className="email_button"
      >
        ENVIAR
      </button>
    </form>
  );
};

export default Form;
