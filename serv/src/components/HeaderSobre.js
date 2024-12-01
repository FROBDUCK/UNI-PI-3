import React from 'react';
import logo from '../assets/logo.png';
import styles from './HeaderSobre.module.css';
import { Button } from './Button';

export function HeaderSobre() {
  const handleClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo da marca" />
      <div className={styles.container}>
        <div className={styles.links}>
          <strong><a href="a">Eu quero prestar serviços</a></strong>
          <strong><a href="a">Eu quero contratar</a></strong>
        </div>
        <div className={styles.buttons}>
          <Button type="primary" onClick={handleClick}>Entrar</Button>
          <Button type="secondary" onClick={handleClick}>Cadastrar</Button>
        </div>
      </div>
    </header>
  );
}
