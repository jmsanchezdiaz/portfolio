import React, { useContext } from 'react';
import { colors } from '../../colors';
import { DarkModeContext } from '../../Context/DarkModeContext';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Technologys from '../Technologys/Technologys';
import VisibleElement from '../VisibleElement/VisibleElement';

const Portfolio = () => {
  const { isDarkModeOn } = useContext(DarkModeContext);
  return (
    <div
      className="portfolio"
      style={{ background: isDarkModeOn ? colors.sunBkgColor : '#fff' }}
    >
      <Header />
      <Hero />
      <VisibleElement children={<AboutMe />} />
      <VisibleElement children={<Technologys />} />
      <VisibleElement children={<Projects />} />
      <VisibleElement children={<ContactMe />} />
      <Footer />
    </div>
  );
};

export default Portfolio;
