import './AboutMe.scss';
import Foto from '../../static/projects-imgs/FotoLinkedIn.jpg';
import { useSpreadContext } from '../../customHooks/useSpreadContext';

const AboutMe = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  return (
    <section
      style={{
        background: isDarkModeOn ? colors.moonBkgColor : colors.sunMainColor,
      }}
      id="SobreMi"
      className="sobre-mi box-item"
    >
      <div className="sobre-mi__text">
        <h2
          style={{
            color: isDarkModeOn ? colors.moonMainColor : '#fff',
          }}
        >
          SOBRE MÍ
        </h2>
        <p>
          Soy un estudiante de Licenciatura en Informática en la Universidad
          Nacional de Quilmes, actualmente me encuentro en el area del
          desarrollo web, especificamente Front End. Aunque en un futuro me
          gustaría poder adquirir más conocimientos sobre otras areas.
        </p>
      </div>
      <figure className="sobre-mi__img-container">
        <img src={Foto} alt="FOTO DE PERFIL" />
      </figure>
    </section>
  );
};

export default AboutMe;
