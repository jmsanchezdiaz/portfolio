import "./Footer.scss";
import Logo from "../../projects-imgs/LOGO JM.png";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy"> 2021 © Juan Manuel Sanchez Diaz</span>
      <img src={Logo} alt="logo-jm" />
      <ul className="footer__links">
        <li>
          <a href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz-1bb0661bb/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/jmsanchezdiaz">Github</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
