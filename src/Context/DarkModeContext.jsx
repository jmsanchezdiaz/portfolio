import { createContext, useState } from 'react';

export const DarkModeContext = createContext(false);

export const DarkModeProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleDarkMode = () => setIsDarkModeOn(!isDarkModeOn);

  return (
    <DarkModeContext.Provider
      value={{ isDarkModeOn, setIsDarkModeOn, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
