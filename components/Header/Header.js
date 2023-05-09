import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Restaurant Demo</h1>
    </header>
  );
};

export default Header;
