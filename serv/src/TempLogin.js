// src/TempLogin.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgcadastro from "./assets/imgcadastrocliente.png";
import logo from "./assets/logobranca.png";
import "./TempLogin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWorker, setIsWorker] = useState(false); // Alterna entre cliente e prestador
  const [showPassword, setShowPassword] = useState(false); // Mostrar/Esconder senha
  const navigate = useNavigate();

  // Ao fazer login bem-sucedido
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

      const userName = response.data.split(": ")[1];
      localStorage.setItem("userName", userName);
      localStorage.setItem("userLoggedIn", "true");
      localStorage.setItem("role", isWorker ? "worker" : "customer");

      // Armazenar o ID do usuário logado
      const userId = response.data.split("ID: ")[1]; // Ajuste conforme o backend retornar o ID
      if (isWorker) {
        localStorage.setItem("workerId", userId);
      } else {
        localStorage.setItem("customerId", userId);
      }

      alert(`Bem-vindo, ${userName}`);
      navigate("/Logadohome");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro no login. Verifique os dados.");
    }
  };

  return (
    <div class="total">
      <div class="esquerda">
        <Link to="/">
          <img id="minilogo" src={logo} alt="Mini Logo" />
        </Link>
        <img id="imagem-lateral" src={imgcadastro} alt="Imagem Cadastro" />
      </div>

      <div class="direita">
        <div className="cabecalho">
          <div className="titulo">
            <h1>Faça seu login</h1>
          </div>
          <div className="texto">
            <p>Não quer contratar?</p>
            <Link to="/LoginService">Quero prestar serviços</Link>
          </div>
        </div>

        <div className="inputs">
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}></div>
            <div id="div-email">
              <p>Email</p>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div id="div-password">
              <p>Senha</p>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div id="div-checkbox">
              <input type="checkbox"></input>
              <p>Mantenha-me conectado</p>
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div className="cadastre">
            <p>Não possui uma conta?</p>
            <Link to="/cadastrocliente">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
