// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as SignOutIcon } from '../assets/sign-out.svg'; 
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/api/login/logout'); // Chama o endpoint de logout
      localStorage.removeItem('userName'); // Remove os dados do usuário
      alert('Logout realizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      alert('Erro ao realizar logout. Tente novamente.');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>
      <SignOutIcon className="logout-icon" />
      </button>
    </div>
  );
};

export default Logout;
