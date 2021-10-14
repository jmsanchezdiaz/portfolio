import "./Header.scss";
import Logo from "../../projects-imgs/LOGO JM.png";
import { useMediaQueryWithWidth } from "../../customHooks/useMediaQueryWithWidth";
import useScrollY from "../../customHooks/useScrollY";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
const Header = () => {
  const [isMobileView] = useMediaQueryWithWidth(630);
  const [matchScrollPosition] = useScrollY(0);

  return (
    <header
      style={{
        boxShadow: matchScrollPosition
          ? "none"
          : "0px 1px 2px rgba(0,0,0,0.178)",
      }}
      className="header"
    >
      <img src={Logo} alt="logo" />
      <nav className="navbar">
        {isMobileView ? (
          <ResponsiveMenu />
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
