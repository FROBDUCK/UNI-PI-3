import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import Logout from './Logout';

const HeaderLogado = () => {
  const [userName, setUserName] = useState(null); // Definindo o estado para armazenar o nome do usuário
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [error, setError] = useState(null); // Estado para mostrar erro, se houver

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/login/customer');
        const loggedUser = response.data.find(user => user.userName === localStorage.getItem('userName'));

        if (loggedUser) {
          setUserName(loggedUser.userName); // Armazena o nome do usuário
        } else {
          throw new Error('Usuário não encontrado');
        }
      } catch (err) {
        console.error('Erro ao buscar o nome do usuário:', err);
        setError('Erro ao buscar o nome do usuário');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUserName(); // Chama a função para fazer a requisição
  }, []); // Dependência vazia para rodar a requisição apenas uma vez

  if (loading) {
    return <p>Carregando...</p>; // Exibe enquanto carrega
  }

  if (error) {
    return <p>{error}</p>; // Exibe mensagem de erro, se houver
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="../assets/logo.png" alt="logo da marca" />
      </Link>
      <div className={styles.container}>
        <div className="row" id="row-buttons2">
          {userName ? <p>{userName}!</p> : <p>Usuário não encontrado</p>} {/* Exibe o nome do usuário se encontrado */}
          <Logout />
        </div>
      </div>
    </header>
  );
}

export default HeaderLogado;
