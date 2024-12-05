// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Switch, FormControlLabel } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    textPerfil: '',
    tempExperiencia: '',
    password: '', // adicionar o campo de senha se necessário
    cliente: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://parseapi.back4app.com/users',
        {
          username: formData.nome,
          email: formData.email,
          password: formData.password,
          cnpj: formData.cnpj,
          endereco: formData.endereco,
          telefone: formData.telefone,
          textPerfil: formData.textPerfil,
          tempExperiencia: formData.tempExperiencia,
          cliente: formData.cliente,
        },
        {
          headers: {
            'X-Parse-Application-Id': 'S2pTPmR8V42bT7X3ChMEUSvzpExRtPo507sHOfg7',
            'X-Parse-REST-API-Key': 'Ho7Y4obYjQL1C6of8Yaxedqh440OYRP9c2jm9IMe',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Usuário criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
       <div>
      <h1>Página de Cadastro</h1>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
   
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="email" placeholder="E-mail" onChange={handleChange} />
      <input name="cnpj" placeholder="CNPJ" onChange={handleChange} />
      <input name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input name="telefone" placeholder="Telefone" onChange={handleChange} />
      <input name="textPerfil" placeholder="Descrição do Perfil" onChange={handleChange} />
      <input name="tempExperiencia" placeholder="Tempo de Experiência" onChange={handleChange} />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} />
      <label>
  {formData.cliente ? "Cliente" : "Prestador"}
  <input 
    type="checkbox" 
    name="cliente" 
    checked={formData.cliente} 
    onChange={(e) => setFormData({ ...formData, cliente: e.target.checked })} 
    style={{ display: "none" }} // Esconde o checkbox padrão
  />
  <span 
    onClick={() => setFormData({ ...formData, cliente: !formData.cliente })} 
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

      <button type="submit">Cadastrar</button>
    </form>
    
  );
};

export default Signup;
