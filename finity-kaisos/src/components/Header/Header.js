import React from 'react';
import css from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={css.header}>
      <span>{title}</span>
    </header>
  );
};

export default Header;
