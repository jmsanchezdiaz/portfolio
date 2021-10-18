import { useState } from "react";
import BarsMenu from "../../../static/icons/bars-menu.svg";
import "./ResponsiveMenu.scss";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <ul className="navbar--responsive__list">
          <li>
            <a onClick={closeMenu} href="#SobreMi">
              Sobre Mí
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Tecnologias">
              Tecnologias
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Proyectos">
              Proyectos
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Contactame">
              Contactame
            </a>
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
