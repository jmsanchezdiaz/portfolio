import React from 'react';
import { useSpreadContext } from '../../customHooks/useSpreadContext';
import './Navbar.scss';

const Navbar = ({ closeMenu, isMobileView, isOpen }) => {
  const { isDarkModeOn, colors } = useSpreadContext();
  const correspondingStyle = {
    clipPath: !isMobileView
      ? 'none'
      : isOpen
      ? ' polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  };

  const correspondingAnchorStyle = {
    color: isDarkModeOn
      ? colors.moonMainColor
      : !isMobileView
      ? colors.sunMainColor
      : '#fff',
  };

  return (
    <nav className="navbar">
      <ul
        onClick={closeMenu}
        style={correspondingStyle}
        className={isMobileView ? 'navbar__list--responsive' : 'navbar__list'}
      >
        <li>
          <a style={correspondingAnchorStyle} href="#SobreMi">
            Sobre Mí
          </a>
        </li>
        <li>
          <a style={correspondingAnchorStyle} href="#Experiencia">
            Contactame
          </a>
        </li>
        <li>
          <a style={correspondingAnchorStyle} href="#Tecnologias">
            Tecnologias
          </a>
        </li>
        <li>
          <a style={correspondingAnchorStyle} href="#Proyectos">
            Proyectos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
