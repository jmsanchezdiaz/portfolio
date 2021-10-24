import "./Header.scss";
import Logo from "../../static/projects-imgs/LOGO JM.png";
import BarsMenu from "../../static/icons/bars-menu.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 630) setIsMobileView(true);
      else setIsMobileView(false);
      setIsOpen(false);
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  useEffect(() => {
    const handleScroll = () => {
      const curScroll = window.scrollY;

      if (curScroll !== 0) setIsScrolling(true);
      else setIsScrolling(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => {
    if (isMobileView) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header
      style={{
        boxShadow: !isScrolling ? "none" : "0px 1px 2px rgba(0,0,0,0.150)",
      }}
      className="header"
    >
      <img src={Logo} alt="logo" />
      {/* DESKTOP MENU */}
      <nav className="navbar">
        <ul className="navbar__list">
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
      </nav>
      {/* MOBILE MENU */}
      <ul
        style={{
          clipPath: isOpen
            ? " polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        className="navbar__list--responsive"
      >
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
      <img
        onClick={openMenu}
        src={BarsMenu}
        alt="bars-icon"
        className="navbar__bars"
      />
    </header>
  );
};

export default Header;
