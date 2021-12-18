import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologys from './components/Technologys/Technologys';
import VisibleElement from './components/VisibleElement/VisibleElement';
import { DarkModeProvider } from './Context/DarkModeContext';
import './main.scss';

function App() {
  return (
    <DarkModeProvider>
      <div className="portfolio">
        <Header />
        <Hero />
        <VisibleElement children={<AboutMe />} />
        <VisibleElement children={<Technologys />} />
        <VisibleElement children={<Projects />} />
        <VisibleElement children={<ContactMe />} />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
