import "./Technologys.scss";
import HtmlIcon from "../../static/icons/html5-original.svg";
import Css3Icon from "../../static/icons/css3-original.svg";
import SassIcon from "../../static/icons/sass-original.svg";
import JavascriptIcon from "../../static/icons/javascript-original.svg";
import TypescriptIcon from "../../static/icons/typescript-original.svg";
import ReactJSIcon from "../../static/icons/react-original.svg";
import PostgresIcon from "../../static/icons/postgresql-original.svg";

const Technologys = () => {
  return (
    <section id="Tecnologias" className="tecnologias">
      <h2>MI CONJUNTO DE TECNOLOGIAS</h2>
      <ul className="tecnologias__list">
        <li>
          <img src={HtmlIcon} alt="html-icon" />
          <span>HTML</span>
        </li>
        <li>
          <img src={Css3Icon} alt="css-icon" />
          <span>CSS3</span>
        </li>
        <li>
          <img src={SassIcon} alt="sass-icon" />
          <span>SASS</span>
        </li>
        <li>
          <img src={JavascriptIcon} alt="javascript-icon" />
          <span>JAVASCRIPT</span>
        </li>
        <li>
          <img src={TypescriptIcon} alt="typescript-icon" />
          <span>TYPESCRIPT</span>
        </li>
        <li>
          <img src={ReactJSIcon} alt="reactjs-icon" />
          <span>REACTJS</span>
        </li>
        <li>
          <img src={PostgresIcon} alt="postgresql-icon" />
          <span>POSTGRESQL</span>
        </li>
      </ul>
    </section>
  );
};

export default Technologys;
