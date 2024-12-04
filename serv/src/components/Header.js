import React from 'react';
import logo from '../assets/logo.png';
import styles from './Header.module.css';
import { Link, useNavigate } from "react-router-dom";
import { Button } from './Button';

export function Header() {
  const navigate = useNavigate(); 

  
  const handleCadastrar = () => {
    navigate('/cadastro');  
  };

  
  const handleEntrar = () => {
    navigate('/login');  
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo da marca" />
      </Link>
      <div className={styles.container}>
        <div className={styles.links}>
          <strong><a href="a">Eu quero prestar serviços</a></strong>
          <strong><a href="a">Eu quero contratar</a></strong>
        </div>
        <div className={styles.buttons}>
          <Button type="primary" onClick={handleEntrar}>Entrar</Button>
          <Button type="secondary" onClick={handleCadastrar}>Cadastrar</Button>
        </div>
      </div>
    </header>
  );
}

