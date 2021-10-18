import "./Header.scss";
import Logo from "../../static/projects-imgs/LOGO JM.png";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <header
      style={{
        boxShadow: !isScrolling ? "none" : "0px 1px 2px rgba(0,0,0,0.150)",
      }}
      className="header"
    >
      <img src={Logo} alt="logo" />
      <nav className="navbar">
        <ResponsiveMenu />
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
    </header>
  );
};

export default Header;
