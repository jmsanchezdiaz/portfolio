import Portfolio from './components/Portfolio/Portfolio';
import { DarkModeProvider } from './Context/DarkModeContext';
import './main.scss';

function App() {
  return (
    <DarkModeProvider>
      <Portfolio />
    </DarkModeProvider>
  );
}

export default App;
