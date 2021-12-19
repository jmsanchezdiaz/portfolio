import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext(false);

const colors = {
  sunMainColor: ' #2c3e50',
  sunBkgColor: '#10171d',
  sunSecondaryColor: '#ecf0f1',
  sunThirdColor: '#1abc9c',
  moonBkgColor: '#222B33',
  moonMainColor: '#28A9FF',
};

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
      value={{ isDarkModeOn, setIsDarkModeOn, toggleDarkMode, colors }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
