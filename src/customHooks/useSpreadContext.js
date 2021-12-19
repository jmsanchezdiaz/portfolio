import { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkModeContext';

const useSpreadContext = () => {
  const context = useContext(DarkModeContext);
  return { ...context };
};

export { useSpreadContext };
