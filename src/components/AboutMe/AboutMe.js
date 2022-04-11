import './AboutMe.scss';
import { photo } from '../../images';
import { useSpreadContext } from '../../customHooks/useSpreadContext';

const AboutMe = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  return (
    <section
      style={{
        background: isDarkModeOn ? colors.moonBkgColor : colors.sunMainColor
      }}
      id='SobreMi'
      className='sobre-mi box-item'>
      <div className='sobre-mi__text'>
        <h2
          style={{
            color: isDarkModeOn ? colors.moonMainColor : '#fff'
          }}>
          SOBRE MÍ
        </h2>
        <p>
          Hola 👋, soy Juanma! Soy un desarrollador frontend autodidacta de
          Wilde, Argentina, amo aprender nuevas tecnologías y el trabajo en
          equipo. Ademas de mi camino como Frontend, me encuentro estudiando la
          Licenciatura en Informatica de la{' '}
          <a
            style={{
              color: isDarkModeOn ? colors.moonMainColor : colors.sunThirdColor
            }}
            href='http://www.unq.edu.ar/'
            target='_blank'
            rel='noreferrer'>
            Universidad Nacional De Quilmes
          </a>
          .
        </p>
      </div>
      <figure className='sobre-mi__img-container'>
        <img src={photo.src} alt={photo.alt} />
      </figure>
    </section>
  );
};

export default AboutMe;
