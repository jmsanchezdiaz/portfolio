import './Technologys.scss';
import { useSpreadContext } from '../../customHooks/useSpreadContext';
import imgs from '../../images';

const Technologys = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  return (
    <section
      style={{
        color: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
        backgroundColor: isDarkModeOn ? colors.sunMainColor : '#fff',
      }}
      id='Tecnologias'
      className='tecnologias'>
      <h2>MI CONJUNTO DE TECNOLOGIAS</h2>
      <ul className='tecnologias__list'>
        {imgs?.map(({ src, alt, label }) => (
          <li key={src + alt}>
            <img src={src} alt={alt} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologys;
