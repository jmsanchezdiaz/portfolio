import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologys from "./components/Technologys/Technologys";
import VisibleElement from "./components/VisibleElement/VisibleElement";
import "./main.scss";

const defaultOptions = {
  root: null,
  rootMargin: "30px",
  threshold: 0.5,
};

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <VisibleElement options={defaultOptions} children={<AboutMe />} />
      <VisibleElement options={defaultOptions} children={<Technologys />} />
      <VisibleElement options={defaultOptions} children={<Projects />} />
      <VisibleElement options={defaultOptions} children={<ContactMe />} />
      <Footer />
    </div>
  );
}

export default App;
