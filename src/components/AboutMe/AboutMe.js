import React from "react";
import "./AboutMe.scss";
import Foto from "../../static/projects-imgs/FotoLinkedIn.png";

const AboutMe = () => {
  return (
    <section id="SobreMi" className="sobre-mi box-item">
      <div className="sobre-mi__text">
        <h2>SOBRE MÍ</h2>
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
