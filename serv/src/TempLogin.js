import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgcadastro from "./assets/imgcadastrocliente.png";
import logo from "./assets/logobranca.png";
import "./TempLogin.css";
import PasswordInput from "./components/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para autenticação
  const attemptLogin = async (role) => {
    const endpoint =
      role === "worker"
        ? "http://localhost:8080/api/login/worker"
        : "http://localhost:8080/api/login/customer";

    return axios.post(
      endpoint,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  };

  // Lógica para tentar login como worker ou customer
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Primeiro tenta login como worker
      let response = await attemptLogin("worker");

      // Se sucesso, salva dados como worker
      handleSuccessfulLogin(response, "worker");
    } catch (workerError) {
      try {
        // Se falhou como worker, tenta login como customer
        let response = await attemptLogin("customer");

        // Se sucesso, salva dados como customer
        handleSuccessfulLogin(response, "customer");
      } catch (customerError) {
        // Se ambos falharem, exibe erro
        console.error("Erro ao fazer login:", workerError, customerError);
        alert("Erro no login. Verifique os dados.");
      }
    }
  };

  // Função para lidar com login bem-sucedido
  const handleSuccessfulLogin = (response, role) => {
    const userName = response.data.split(": ")[1];
    const userId = response.data.split("ID: ")[1]; // Ajuste conforme o backend retornar o ID

    localStorage.setItem("userName", userName);
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("role", role);

    if (role === "worker") {
      localStorage.setItem("workerId", userId);
    } else {
      localStorage.setItem("customerId", userId);
    }

    alert(`Bem-vindo, ${userName}`);
    navigate("/Logado");
  };

  return (
    <div className="total">
      <div className="esquerda">
        <Link to="/">
          <img id="minilogo" src={logo} alt="Mini Logo" />
        </Link>
        <img id="imagem-lateral" src={imgcadastro} alt="Imagem Cadastro" />
      </div>

      <div className="direita">
        <div className="cabecalho">
          <div className="titulo">
            <h1>Faça seu login</h1>
          </div>
        </div>

        <div className="inputs">
          <form onSubmit={handleLogin}>
            <div className="div-email">
              <p>Email</p>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="div-password">
              <p>Senha</p>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} required />
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
