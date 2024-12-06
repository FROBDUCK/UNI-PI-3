import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import imglogincliente from "./assets/imglogincliente.png";
import logo from "./assets/logobranca.png";

const Signup = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    telefone: "",
    state: "",
    city: "",
    zipCode: "",
    district: "",
    street: "",
    num: "",
    cpf: "",
    cnpj: "",
    fieldOfWork: "",
    bio: "",
    cliente: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ajusta o endpoint com a URL do servidor Ngrok
    const endpoint = formData.cliente
      ? "https://a1ae-160-19-45-104.ngrok-free.app/api/customers"
      : "https://a1ae-160-19-45-104.ngrok-free.app/api/workers";

    // Prepara os dados para envio
    const data = {
      userName: formData.nome,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.telefone,
      addresses: [
        {
          state: formData.state,
          city: formData.city,
          zipCode: formData.zipCode,
          district: formData.district,
          street: formData.street,
          num: parseInt(formData.num, 10),
        },
      ],
    };

    if (formData.cliente) {
      data.cpf = formData.cpf;
    } else {
      data.cnpj = formData.cnpj;
      data.fieldOfWork = formData.fieldOfWork;
      data.bio = formData.bio;
    }

    try {
      // Faz a requisição POST para o servidor
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
        },
      });
      console.log("Usuário criado com sucesso:", response.data);

      // Redireciona para a página de login temporário
      navigate("/logincliente");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar o usuário. Tente novamente.");
    }
  };

  return (
    <div className="whole-page">
      <form id="formulario" onSubmit={handleSubmit}>
        <div id="esquerda">
          <Link to="/">
            <img id="minilogo" src={logo} alt="Mini Logo" />
          </Link>
          <img
            id="imagem-lateral"
            src={imglogincliente}
            alt="Imagem Cadastro"
          />
        </div>
        <div id="direita">
          <div>
            <h1>Cadastre-se agora</h1>
          </div>
          <div className="inputs">
            <input name="nome" placeholder="Nome" onChange={handleChange} />
            <input name="email" placeholder="E-mail" onChange={handleChange} />
            <input
              name="password"
              type="password"
              placeholder="Senha"
              onChange={handleChange}
            />
            <input
              name="telefone"
              placeholder="Telefone"
              onChange={handleChange}
            />
            <input name="state" placeholder="Estado" onChange={handleChange} />
            <input name="city" placeholder="Cidade" onChange={handleChange} />
            <input name="zipCode" placeholder="CEP" onChange={handleChange} />
            <div id="endereco">
              <input
                name="district"
                placeholder="Bairro"
                onChange={handleChange}
              />
              <input name="street" placeholder="Rua" onChange={handleChange} />
              <input name="num" placeholder="Número" onChange={handleChange} />
            </div>
            {formData.cliente && (
              <input name="cpf" placeholder="CPF" onChange={handleChange} />
            )}
            {!formData.cliente && (
              <>
                <input name="cnpj" placeholder="CNPJ" onChange={handleChange} />
                <input
                  name="fieldOfWork"
                  placeholder="Área de Trabalho"
                  onChange={handleChange}
                />
                <input
                  name="bio"
                  placeholder="Biografia"
                  onChange={handleChange}
                />
              </>
            )}
            <label id="checkbox">
              {formData.cliente ? "Cliente" : "Prestador"}
              <input
                type="checkbox"
                name="cliente"
                checked={formData.cliente}
                onChange={(e) =>
                  setFormData({ ...formData, cliente: e.target.checked })
                }
                style={{ display: "none" }}
              />
              <span
                onClick={() =>
                  setFormData({ ...formData, cliente: !formData.cliente })
                }
                style={{
                  display: "inline-block",
                  width: "50px",
                  height: "25px",
                  backgroundColor: formData.cliente ? "#4CAF50" : "#ccc",
                  borderRadius: "25px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "23px",
                    height: "23px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "1px",
                    left: formData.cliente ? "26px" : "1px",
                    transition: "left 0.2s",
                  }}
                />
              </span>
            </label>
            <button id="botao-cadastrar" type="submit">
              Cadastrar
            </button>
            <div id="possui-conta">
              <p>Já possui uma conta?</p>
              <Link to="/logincliente">Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
