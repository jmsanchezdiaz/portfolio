import './Projects.scss';
import Gipharg from '../../static/projects-imgs/GiphargImg.png';
import Aerolab from '../../static/projects-imgs/AerolabImg.jpg';
import Softvision from '../../static/projects-imgs/SoftvisionImg.png';
import RestApp from '../../static/projects-imgs/RestCountriesApp.jpg';
import ReactJS from '../../static/icons/react-original.svg';
import Typescript from '../../static/icons/typescript-original.svg';
import Sass from '../../static/icons/sass-original.svg';
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
        <Project
          imgUrl={Gipharg}
          projectName='GIPHARG'
          repoName='gipharg'
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
        <Project
          imgUrl={Aerolab}
          projectName='AEROLAB'
          repoName='aerolab-challenge'
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
        <Project
          imgUrl={Softvision}
          projectName='SOFTVISION'
          repoName='softvision-challenge'
          technologiesImgs={[ReactJS, Typescript, Sass]}
        />
        <Project
          imgUrl={RestApp}
          projectName='REST COUNTRIES APP'
          repoName='rest-countries-app'
          technologiesImgs={[ReactJS, Sass]}
        />
      </div>
    </section>
  );
};

export default Projects;
