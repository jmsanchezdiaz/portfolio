import "./Footer.scss";
import Logo from "../../static/projects-imgs/LOGO JM.png";
import myResumePDF from "../../static/JMSANCHEZDIAZCV.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy"> 2021 © Juan Manuel Sanchez Diaz</span>
      <a rel="noreferrer" href="/portfolio">
        <img src={Logo} alt="logo-jm" />
      </a>
      <ul className="footer__links">
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz-1bb0661bb/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jmsanchezdiaz"
          >
            Github
          </a>
        </li>
        <li>
          <a rel="noreferrer" target="_blank" href={myResumePDF} download>
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
