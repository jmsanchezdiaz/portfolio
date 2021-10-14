import { useState } from "react";
import BarsMenu from "../../../static/icons/bars-menu.svg";
import "./ResponsiveMenu.scss";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <ul className="navbar--responsive__list">
          <li>
            <a href="#SobreMi">Sobre Mí</a>
          </li>
          <li>
            <a href="#Tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#Proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#Contactame">Contactame</a>
          </li>
        </ul>
      )}
      <img
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="navbar__bars"
        src={BarsMenu}
        alt="bars-menu"
      />
    </>
  );
};

export default ResponsiveMenu;
