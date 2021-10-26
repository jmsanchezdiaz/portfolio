import "./Header.scss";
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
      <svg
        width="252"
        height="252"
        viewBox="0 0 252 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5391 169.062C32.4609 167.63 28.8411 165.352 26.6797 162.227C24.5443 159.102 23.4766 155.312 23.4766 150.859V142.93C23.4766 140.352 22.9036 138.346 21.7578 136.914C20.638 135.482 18.8932 134.766 16.5234 134.766V126.914C18.8932 126.914 20.638 126.211 21.7578 124.805C22.9036 123.372 23.4766 121.341 23.4766 118.711V110.781C23.4766 106.328 24.5443 102.552 26.6797 99.4531C28.8411 96.3281 32.4609 94.0495 37.5391 92.6172L39.7266 98.75C37.487 99.5573 35.9115 101.003 35 103.086C34.1146 105.143 33.6719 107.708 33.6719 110.781V118.711C33.6719 121.419 33.0859 123.828 31.9141 125.938C30.7422 128.021 28.9844 129.648 26.6406 130.82C28.9844 132.044 30.7422 133.711 31.9141 135.82C33.0859 137.904 33.6719 140.273 33.6719 142.93V150.859C33.6719 153.932 34.1146 156.497 35 158.555C35.9115 160.638 37.487 162.083 39.7266 162.891L37.5391 169.062ZM82.5391 155.82C76.6016 155.82 71.7969 154.297 68.125 151.25C64.4792 148.203 62.5391 143.503 62.3047 137.148L62.3828 136.914H73.0859C73.2682 140.638 74.0885 143.242 75.5469 144.727C77.0312 146.185 78.9844 146.914 81.4062 146.914C83.724 146.914 85.625 146.159 87.1094 144.648C88.6198 143.138 89.375 140.898 89.375 137.93V106.172L81.7188 105V98.125H106.836V105L100.742 106.172V137.93C100.742 143.424 99.1667 147.786 96.0156 151.016C92.8906 154.219 88.3984 155.82 82.5391 155.82ZM110.078 155V148.164L116.133 146.992V106.172L110.078 105V98.125H133.008L148.516 137.773H148.75L163.75 98.125H186.719V105L180.625 106.172V146.992L186.719 148.164V155H163.164V148.164L169.531 146.992V136.094L169.727 110.43L169.492 110.391L152.5 154.219H143.867L126.484 110.742L126.25 110.781L126.914 134.922V146.992L133.633 148.164V155H110.078ZM211.914 169.062L209.727 162.891C211.914 162.083 213.464 160.638 214.375 158.555C215.286 156.497 215.742 153.932 215.742 150.859V142.93C215.742 140.221 216.341 137.826 217.539 135.742C218.737 133.659 220.547 132.031 222.969 130.859C220.547 129.688 218.737 128.06 217.539 125.977C216.341 123.867 215.742 121.445 215.742 118.711V110.781C215.742 107.708 215.286 105.143 214.375 103.086C213.464 101.003 211.914 99.5573 209.727 98.75L211.914 92.6172C216.966 94.0495 220.573 96.3281 222.734 99.4531C224.896 102.552 225.977 106.328 225.977 110.781V118.711C225.977 121.341 226.536 123.372 227.656 124.805C228.776 126.211 230.521 126.914 232.891 126.914V134.766C230.521 134.766 228.776 135.482 227.656 136.914C226.536 138.346 225.977 140.352 225.977 142.93V150.859C225.977 155.312 224.896 159.102 222.734 162.227C220.573 165.352 216.966 167.63 211.914 169.062Z"
          fill="#2C3E50"
        />
      </svg>
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
