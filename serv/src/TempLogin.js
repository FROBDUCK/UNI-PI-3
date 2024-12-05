// src/TempLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://parseapi.back4app.com/login', {
        username: email, // Usando o email como nome de usuário
        password,
      }, {
        headers: {
          'X-Parse-Application-Id': 'S2pTPmR8V42bT7X3ChMEUSvzpExRtPo507sHOfg7',
          'X-Parse-REST-API-Key': 'Ho7Y4obYjQL1C6of8Yaxedqh440OYRP9c2jm9IMe',
          'X-Parse-Revocable-Session': '1',
        },
      });

      // Armazenando o token da sessão no localStorage
      const sessionToken = response.data.sessionToken;
      localStorage.setItem('sessionToken', sessionToken);
      localStorage.setItem('username', email);

      // Redirecionando para a página após o login
      navigate('/Logadohome');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro no login. Verifique os dados.');
    }
  };

  return (
    
    <div>
      <h1>Página de Login</h1>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Campo obrigatório
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Campo obrigatório
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
