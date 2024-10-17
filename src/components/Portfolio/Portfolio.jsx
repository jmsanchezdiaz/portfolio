import React from "react";
import { useSpreadContext } from "../../customHooks/useSpreadContext";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Technologys from "../Technologys/Technologys";
import VisibleElement from "../VisibleElement/VisibleElement";
import Experience from "../Experience/Experience";

const Portfolio = () => {
  const { isDarkModeOn, colors } = useSpreadContext();
  return (
    <div
      className="portfolio"
      style={{ background: isDarkModeOn ? colors.sunBkgColor : "#fff" }}>
      <Header />
      <Hero />
      <VisibleElement children={<AboutMe />} />
      <VisibleElement children={<Experience />} />
      <VisibleElement children={<Technologys />} />
      <VisibleElement children={<Projects />} />
      <Footer />
    </div>
  );
};

export default Portfolio;
