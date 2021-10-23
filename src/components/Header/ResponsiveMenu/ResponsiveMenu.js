import { useEffect, useState } from "react";
import BarsMenu from "../../../static/icons/bars-menu.svg";
import "./ResponsiveMenu.scss";

const ResponsiveMenu = () => {
  const open = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const closed = "polygon(0 0, 100% 0, 100% 0, 0 0)";
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 630) setIsMobileView(true);
      else setIsMobileView(false);
      setIsOpen(false);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  return (
    <>
      <ul
        style={{
          clipPath: isOpen ? open : closed,
        }}
        className="navbar--responsive__list"
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

      {isMobileView && (
        <img
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="navbar__bars"
          src={BarsMenu}
          alt="bars-menu"
        />
      )}
    </>
  );
};

export default ResponsiveMenu;
