import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologys from "./components/Technologys/Technologys";
import "./main.scss";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <AboutMe />
      <Technologys />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
