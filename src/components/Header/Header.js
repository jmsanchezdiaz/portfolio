import './Header.scss';
import { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import DarkModeToggleButton from '../DarkModeToggleButton/DarkModeToggleButton/DarkModeToggleButton';
import { useSpreadContext } from '../../customHooks/useSpreadContext';
import Navbar from '../Navbar/Navbar';
import PersonalLogo from '../UI Components/PersonalLogo/PersonalLogo';

const Header = () => {
  const { isDarkModeOn, colors, toggleDarkMode } = useSpreadContext();
  const [isScrolling, setIsScrolling] = useState(window.scrollY !== 0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 630);
  const closeMenu = () => setIsOpen(false);

  const openMenu = () => {
    if (isMobileView) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 630);
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);

  useEffect(() => {
    const handleScroll = () => {
      const curScroll = window.scrollY;
      setIsScrolling(curScroll !== 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <header
      style={{
        backgroundColor: isDarkModeOn ? colors.moonBkgColor : '#fff',
        boxShadow: !isScrolling ? 'none' : '0px 1px 2px rgba(0,0,0,0.150)'
      }}
      className='header'>
      <PersonalLogo isDarkModeOn={isDarkModeOn} colors={colors} />

      <Navbar
        closeMenu={closeMenu}
        isOpen={isOpen}
        isMobileView={isMobileView}
      />

      <div className='icon-group'>
        <DarkModeToggleButton
          colors={colors}
          toggleDarkMode={toggleDarkMode}
          isDarkModeOn={isDarkModeOn}
        />
        <MenuButton
          colors={colors}
          openMenu={openMenu}
          isDarkModeOn={isDarkModeOn}
        />
      </div>
    </header>
  );
};

export default Header;
