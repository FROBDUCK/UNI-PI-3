import React from 'react';
import styles from './Button.module.css';

export const Button = ({ type = 'primary', onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
