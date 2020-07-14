import React from 'react';
import css from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={css.header}>
      <span>Screen 2</span>
    </header>
  );
};

export default Header;
