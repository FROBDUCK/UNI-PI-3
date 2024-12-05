import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    telefone: '',
    state: '',
    city: '',
    zipCode: '',
    district: '',
    street: '',
    num: '',
    cpf: '', // Apenas para clientes
    cnpj: '', // Apenas para prestadores
    fieldOfWork: '', // Apenas para prestadores
    bio: '', // Apenas para prestadores
    cliente: true, // Define se é cliente ou prestador
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determina o endpoint com base no tipo de usuário
    const endpoint = formData.cliente
      ? 'http://localhost:8080/api/customers'
      : 'http://localhost:8080/api/workers';

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

    // Adiciona campos específicos com base no tipo de usuário
    if (formData.cliente) {
      data.cpf = formData.cpf;
    } else {
      data.cnpj = formData.cnpj;
      data.fieldOfWork = formData.fieldOfWork;
      data.bio = formData.bio;
    }

    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} />
      <input name="telefone" placeholder="Telefone" onChange={handleChange} />
      <input name="state" placeholder="Estado" onChange={handleChange} />
      <input name="city" placeholder="Cidade" onChange={handleChange} />
      <input name="zipCode" placeholder="CEP" onChange={handleChange} />
      <input name="district" placeholder="Bairro" onChange={handleChange} />
      <input name="street" placeholder="Rua" onChange={handleChange} />
      <input name="num" placeholder="Número" onChange={handleChange} />

      {/* Campos específicos para Cliente */}
      {formData.cliente && <input name="cpf" placeholder="CPF" onChange={handleChange} />}

      {/* Campos específicos para Prestador */}
      {!formData.cliente && (
        <>
          <input name="cnpj" placeholder="CNPJ" onChange={handleChange} />
          <input name="fieldOfWork" placeholder="Área de Trabalho" onChange={handleChange} />
          <input name="bio" placeholder="Biografia" onChange={handleChange} />
        </>
      )}

      {/* Toggle para Cliente ou Prestador */}
      <label>
        {formData.cliente ? 'Cliente' : 'Prestador'}
        <input
          type="checkbox"
          name="cliente"
          checked={formData.cliente}
          onChange={(e) => setFormData({ ...formData, cliente: e.target.checked })}
          style={{ display: 'none' }} // Esconde o checkbox padrão
        />
        <span
          onClick={() => setFormData({ ...formData, cliente: !formData.cliente })}
          style={{
            display: 'inline-block',
            width: '50px',
            height: '25px',
            backgroundColor: formData.cliente ? '#4CAF50' : '#ccc',
            borderRadius: '25px',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '23px',
              height: '23px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              top: '1px',
              left: formData.cliente ? '26px' : '1px',
              transition: 'left 0.2s',
            }}
          />
        </span>
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Signup;