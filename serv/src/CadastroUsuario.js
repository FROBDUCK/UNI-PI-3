import axios from "axios";
import React, { useState } from "react";

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    cpfCnpj: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://a1ae-160-19-45-104.ngrok-free.app/api/v1/user-clientes/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      )
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          endereco: "",
          cpfCnpj: "",
          senha: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar usuário.");
      });
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input name="nome" value={formData.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CPF/CNPJ:</label>
          <input
            name="cpfCnpj"
            value={formData.cpfCnpj}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
