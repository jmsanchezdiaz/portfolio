import "./Projects.scss";
import Gipharg from "../../projects-imgs/GiphargImg.png";
import Aerolab from "../../projects-imgs/AerolabImg.jpg";
import Softvision from "../../projects-imgs/SoftvisionImg.png";
import ReactJS from "../../icons/react-original.svg";
import Typescript from "../../icons/typescript-original.svg";
import Javascript from "../../icons/javascript-original.svg";
import Sass from "../../icons/sass-original.svg";
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
          imgUrl={Softvision}
          projectName="SOFTVISION"
          repoName="softvision-challenge"
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
      </div>
    </section>
  );
};

export default Projects;
