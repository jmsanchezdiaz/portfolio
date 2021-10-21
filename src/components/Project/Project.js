import Google from "../../static/icons/google-original.svg";
import Github from "../../static/icons/github-original.svg";
import "./Project.scss";

const Project = ({ imgUrl, projectName, repoName, technologiesImgs }) => {
  return (
    <div className="proyectos__list-item">
      <img src={imgUrl} alt={projectName + "-picture"} />
      <div className="proyectos__list-item-hover">
        <h3>{projectName.toUpperCase()}</h3>
        <div className="proyectos__list-item-technologies">
          {technologiesImgs?.map((img) => {
            return (
              <img
                key={img}
                className="icon"
                src={img}
                alt={img.match(/\/\w+-/gi)}
              />
            );
          })}
        </div>
        <div className="proyectos__list-item-links">
          <a
            rel="noreferrer"
            target="_blank"
            href={"https://github.com/jmsanchezdiaz/" + repoName.toLowerCase()}
          >
            <img className="icon" src={Github} alt="github-icon" />
            <span>Repositorio</span>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={"https://jmsanchezdiaz.github.io/" + repoName.toLowerCase()}
          >
            <img className="icon" src={Google} alt="github-icon" />
            <span>Sitio Web</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
