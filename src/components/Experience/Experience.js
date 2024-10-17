import React from "react";
import { useSpreadContext } from "../../customHooks/useSpreadContext";
import "./Experience.scss";

const workExperiences = [
  {
    company: "Sinaptia & Alliants",
    position: "Fullstack Developer",
    period: "Mayo 2022 - Actualidad",
    description:
      "Desarrollador Fullstack utilizando React, TypeScript y Ruby on Rails para crear soluciones eficientes para Alliants Experience Platform. Trabajo con metodologías ágiles para entregar software de alta calidad."
  },
  {
    company: "Universidad Nacional De Quilmes",
    position: "Ayudante de cátedra",
    period: "Agosto 2022 - Diciembre 2022",
    description:
      "Colaboración ad-honorem en la materia Programación con Objetos II"
  }
];

const Experience = () => {
  const { isDarkModeOn, colors } = useSpreadContext();

  return (
    <section
      style={{
        color: isDarkModeOn ? "#fff" : colors.sunMainColor,
        backgroundColor: isDarkModeOn ? colors.sunMainColor : "#fff"
      }}
      id="Experiencia"
      className="experencia box-item">
      <div className="experiencia__text">
        <h2
          style={{
            color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor
          }}>
          EXPERIENCIA
        </h2>
        {workExperiences.map((workExperience, index) => (
          <div key={index} className="experiencia__item">
            <div>
              <h3>
                {workExperience.position} en {workExperience.company}
              </h3>
              <span>{workExperience.period}</span>
              <p>{workExperience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
