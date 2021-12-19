import React from 'react';
import './MenuButton.scss';

const MenuButton = ({ openMenu, isDarkModeOn, colors }) => {
  return (
    <figure className="menu-button" onClick={openMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#000000"
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
