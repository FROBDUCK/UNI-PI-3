// src/TempLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWorker, setIsWorker] = useState(false); // Alterna entre cliente e prestador
  const navigate = useNavigate();

 // Ao fazer login bem-sucedido
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const endpoint = isWorker
      ? 'http://localhost:8080/api/login/worker'
      : 'http://localhost:8080/api/login/customer';

    const response = await axios.post(endpoint, {
      email,
      password,
    });

    const userName = response.data.split(': ')[1];
    localStorage.setItem('userName', userName);
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('role', isWorker ? 'worker' : 'customer');

    // Armazenar o ID do usuário logado
    const userId = response.data.split('ID: ')[1]; // Ajuste conforme o backend retornar o ID
    if (isWorker) {
      localStorage.setItem('workerId', userId);
    } else {
      localStorage.setItem('customerId', userId);
    }

    alert(`Bem-vindo, ${userName}`);
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
        <div style={{ marginBottom: '20px' }}>
          <label>
            <span
              style={{
                display: 'inline-block',
                width: '150px',
                textAlign: 'center',
                padding: '10px',
                backgroundColor: isWorker ? '#4CAF50' : '#ccc',
                color: '#fff',
                borderRadius: '25px',
                cursor: 'pointer',
              }}
              onClick={() => setIsWorker(!isWorker)}
            >
              {isWorker ? 'Entrar como Prestador' : 'Entrar como Cliente'}
            </span>
          </label>
        </div>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
