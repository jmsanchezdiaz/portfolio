import React from 'react';
import { useSpreadContext } from '../../customHooks/useSpreadContext';
import './Navbar.scss';

const Navbar = ({ closeMenu, isMobileView, isOpen }) => {
  const { isDarkModeOn, colors } = useSpreadContext();
  const correspondingStyle = isMobileView
    ? {
        clipPath: isOpen
          ? ' polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }
    : { clipPath: 'none' };

  return (
    <nav className="navbar">
      <ul
        style={correspondingStyle}
        className={isMobileView ? 'navbar__list--responsive' : 'navbar__list'}
      >
        <li onClick={closeMenu}>
          <a
            style={{
              color: isDarkModeOn ? colors.moonMainColor : '#fff',
            }}
            href="#SobreMi"
          >
            Sobre Mí
          </a>
        </li>
        <li onClick={closeMenu}>
          <a
            style={{
              color: isDarkModeOn ? colors.moonMainColor : '#fff',
            }}
            href="#Tecnologias"
          >
            Tecnologias
          </a>
        </li>
        <li onClick={closeMenu}>
          <a
            style={{
              color: isDarkModeOn ? colors.moonMainColor : '#fff',
            }}
            href="#Proyectos"
          >
            Proyectos
          </a>
        </li>
        <li onClick={closeMenu}>
          <a
            style={{
              color: isDarkModeOn ? colors.moonMainColor : '#fff',
            }}
            href="#Contactame"
          >
            Contactame
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
