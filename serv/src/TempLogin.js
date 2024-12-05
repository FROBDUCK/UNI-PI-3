// src/TempLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWorker, setIsWorker] = useState(false); // Alterna entre cliente e prestador
  const [showPassword, setShowPassword] = useState(false); // Mostrar/Esconder senha
  const navigate = useNavigate();

  // Alterna a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função de login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isWorker
        ? 'https://a1ae-160-19-45-104.ngrok-free.app/api/login/worker'
        : 'https://a1ae-160-19-45-104.ngrok-free.app/api/login/customer';
  
      const response = await axios.post(
        endpoint,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      );
  
      const userName = response.data.split(': ')[1];
      localStorage.setItem('userName', userName);
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('role', isWorker ? 'worker' : 'customer');
  
      alert(`Bem-vindo, ${userName}`);
      navigate('/logado');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro no login. Verifique os dados.');
    }
  };
  
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Imagem na esquerda */}
      <div
        style={{
          flex: 1,
          backgroundImage: 'url("/images/image3.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Formulário na direita */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '80%' }}>
          <h1 style={{ marginBottom: '10px' }}>Faça login</h1>

          <form onSubmit={handleLogin}>
            {/* Switch de tipo de login */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '200px',
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
            </div>

            {/* Input de Email */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                }}
                required
              />
            </div>

            {/* Input de Senha */}
            <div style={{ marginBottom: '15px', position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Senha</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                }}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '40px',
                  cursor: 'pointer',
                  color: '#007bff',
                }}
              >
                {showPassword ? '👁️' : '🔒'}
              </span>
            </div>

            {/* Esqueci minha senha */}
            <div style={{ marginBottom: '15px', textAlign: 'right' }}>
              <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>
                Esqueci minha senha
              </a>
            </div>

            {/* Checkbox para "mantenha-me conectado" */}
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="keepConnected" style={{ marginRight: '10px' }} />
              <label htmlFor="keepConnected">Mantenha-me conectado</label>
            </div>

            {/* Botão de login */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#F05410',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Entrar
            </button>
          </form>

          {/* Texto para cadastro */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <span>Não possui uma conta? </span>
            <Link
              to="/cadastrocliente"
              style={{
                color: '#F05410',
                textDecoration: 'underline', // Sublinhado
                fontWeight: 'bold', // Negrito
              }}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;