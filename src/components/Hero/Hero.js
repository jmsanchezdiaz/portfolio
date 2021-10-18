import "./Hero.scss";
import Github from "../../static/icons/github-original.svg";
import LinkedIn from "../../static/icons/linkedin-original.svg";

import React from "react";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__text">
        <h1>Bienvenido a mi portfolio! </h1>
        <h3>Mi nombre es Juan Manuel Sanchez Diaz</h3>
        <h3>Soy un Desarollador Front End.</h3>
        <div className="hero__icons">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jmsanchezdiaz"
          >
            <img className="hero__icon" src={Github} alt="github-logo" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz-1bb0661bb/"
          >
            <img className="hero__icon" src={LinkedIn} alt="linkedin-logo" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
