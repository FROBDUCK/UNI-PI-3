import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://parseapi.back4app.com/login',
        {
          username: email,
          password,
        },
        {
          headers: {
            'X-Parse-Application-Id': 'S2pTPmR8V42bT7X3ChMEUSvzpExRtPo507sHOfg7',
            'X-Parse-REST-API-Key': 'Ho7Y4obYjQL1C6of8Yaxedqh440OYRP9c2jm9IMe',
            'X-Parse-Revocable-Session': '1',
          },
        }
      );

      const sessionToken = response.data.sessionToken;
      localStorage.setItem('sessionToken', sessionToken);
      localStorage.setItem('username', email);

      navigate('/Logadohome');
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
          backgroundImage: 'url("src/assets/img-login.png")',

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
          <h2 style={{ marginBottom: '20px', fontSize: '16px', color: '#555' }}>
            Não quer prestar serviços?{' '}
            <a href="#" style={{ color: '#F05410', textDecoration: 'none' }}>
              Quero contratar
            </a>
          </h2>

          <form onSubmit={handleLogin}>
            {/* Input de Email */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
              
              >Email</label>
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
              to="/Signup"
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
