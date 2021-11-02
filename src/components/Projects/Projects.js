import "./Projects.scss";
import Gipharg from "../../static/projects-imgs/GiphargImg.png";
import Aerolab from "../../static/projects-imgs/AerolabImg.jpg";
import Softvision from "../../static/projects-imgs/SoftvisionImg.png";
import RestApp from "../../static/projects-imgs/RestCountriesApp.jpg";
import ReactJS from "../../static/icons/react-original.svg";
import Typescript from "../../static/icons/typescript-original.svg";
import Javascript from "../../static/icons/javascript-original.svg";
import Sass from "../../static/icons/sass-original.svg";
import Project from "../Project/Project";

const Projects = () => {
  return (
    <section id="Proyectos" className="proyectos">
      <h2>MIS PROYECTOS</h2>
      <div className="proyectos__list">
        <Project
          imgUrl={Gipharg}
          projectName="GIPHARG"
          repoName="gipharg"
          technologiesImgs={[ReactJS, Javascript, Sass]}
        />
        <Project
          imgUrl={Aerolab}
          projectName="AEROLAB"
          repoName="aerolab-challenge"
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
        <Project
          imgUrl={Softvision}
          projectName="SOFTVISION"
          repoName="softvision-challenge"
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
        <Project
          imgUrl={RestApp}
          projectName="REST COUNTRIES APP"
          repoName="rest-countries-app"
          technologiesImgs={[ReactJS, Sass]}
        />
      </div>
    </section>
  );
};

export default Projects;
