// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/api/login/logout'); // Chama o endpoint de logout
      localStorage.removeItem('userName'); // Remove os dados do usuário
      alert('Logout realizado com sucesso!');
      navigate('/'); // Redireciona para a página inicial
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      alert('Erro ao realizar logout. Tente novamente.');
    }
  };

  return (
    <div>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
