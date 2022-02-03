import './Projects.scss';
import { projects } from '../../images';
import Project from '../Project/Project';
import { useSpreadContext } from '../../customHooks/useSpreadContext';

const Projects = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  return (
    <section
      style={{
        color: isDarkModeOn ? colors.moonMainColor : '#fff',
        backgroundColor: isDarkModeOn
          ? colors.moonBkgColor
          : colors.sunMainColor,
      }}
      id='Proyectos'
      className='proyectos'>
      <h2>MIS PROYECTOS</h2>
      <div className='proyectos__list'>
        {projects?.map((project, i) => (
          <Project
            key={i + '-' + project.repoName}
            imgUrl={project.src}
            projectName={project.projectName}
            repoName={project.repoName}
            technologiesImgs={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
