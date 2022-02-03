import './Footer.scss';
import myResumePDF from '../../static/CV.pdf';
import { useSpreadContext } from '../../customHooks/useSpreadContext';
import PersonalLogo from '../UI Components/PersonalLogo/PersonalLogo';

const Footer = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  const correspondingStyle = {
    color: isDarkModeOn ? colors.moonMainColor : '#fff',
  };
  return (
    <footer
      className='footer'
      style={{
        color: isDarkModeOn ? colors.moonMainColor : '#fff',
        backgroundColor: isDarkModeOn
          ? colors.moonBkgColor
          : colors.sunMainColor,
      }}>
      <span className='footer__copy'> 2021 © Juan Manuel Sanchez Diaz</span>

      <figure
        onClick={() => window.scrollTo(0, 0)}
        style={{
          backgroundColor: isDarkModeOn ? colors.moonMainColor : '#fff',
          borderRadius: '100%',
        }}>
        <PersonalLogo
          isDarkModeOn={isDarkModeOn}
          colors={colors}
          isInverted={true}
        />
      </figure>

      <ul className='footer__links'>
        <li>
          <a
            style={correspondingStyle}
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/juan-manuel-sanchez-diaz-1bb0661bb/'>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            style={correspondingStyle}
            rel='noreferrer'
            target='_blank'
            href='https://github.com/jmsanchezdiaz'>
            Github
          </a>
        </li>
        <li>
          <a
            style={correspondingStyle}
            rel='noreferrer'
            target='_blank'
            href={myResumePDF}
            download>
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
