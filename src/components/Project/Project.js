import './Project.scss';

const Project = ({ imgUrl, url, projectName, repoName, technologiesImgs }) => {
  return (
    <div className='proyectos__list-item'>
      <img src={imgUrl} alt={projectName + '-picture'} />
      <div className='proyectos__list-item-hover'>
        <h3>{projectName.toUpperCase()}</h3>
        <div className='proyectos__list-item-technologies'>
          {technologiesImgs?.map((img) => {
            return (
              <img
                key={img}
                className='icon'
                src={img}
                alt={img.match(/\/\w+-/gi)}
              />
            );
          })}
        </div>
        <div className='proyectos__list-item-links'>
          <a
            rel='noreferrer'
            target='_blank'
            href={'https://github.com/jmsanchezdiaz/' + repoName.toLowerCase()}>
            Repositorio
          </a>
          <a rel='noreferrer' target='_blank' href={url}>
            Sitio Web
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
