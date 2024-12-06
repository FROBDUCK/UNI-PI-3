import axios from "axios";
import React, { useEffect, useState } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://a1ae-160-19-45-104.ngrok-free.app/api/v1/user-clientes/", {
        headers: {
          "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
        },
      })
      .then((response) => {
        console.log("Resposta da API:", response); // Log detalhado da resposta
        setUsuarios(response.data); // Atualiza o estado com os dados dos usuários
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error); // Log do erro no console
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
            <p>Endereço: {usuario.endereco}</p>
            <p>CPF/CNPJ: {usuario.cpfCnpj}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
