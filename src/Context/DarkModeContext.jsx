import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext(false);

export const DarkModeProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(
    JSON.parse(window.localStorage.getItem('isOnDarkMode')) || false
  );

  const toggleDarkMode = () => setIsDarkModeOn(!isDarkModeOn);

  useEffect(() => {
    window.localStorage.setItem('isOnDarkMode', JSON.stringify(isDarkModeOn));
  }, [isDarkModeOn]);

  return (
    <DarkModeContext.Provider
      value={{ isDarkModeOn, setIsDarkModeOn, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
