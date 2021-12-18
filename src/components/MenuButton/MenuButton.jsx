import React from 'react';
import { colors } from '../../colors';

const MenuButton = ({ openMenu, isDarkModeOn }) => {
  return (
    <figure onClick={openMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#000000"
        className="navbar__bars"
      >
        <path
          d="M0 0h24v24H0V0z"
          style={{
            fill: isDarkModeOn ? colors.moonBkgColor : '#fff',
          }}
        />
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          style={{
            fill: isDarkModeOn ? colors.moonMainColor : colors.sunMainColor,
          }}
        />
      </svg>
    </figure>
  );
};

export default MenuButton;
