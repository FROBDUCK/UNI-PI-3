import axios from "axios";
import React, { useState } from "react";

function UsuarioPorId() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState(null);

  const buscarUsuario = () => {
    axios
      .get(
        `https://a1ae-160-19-45-104.ngrok-free.app/api/v1/user-clientes/${id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      )
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        alert("Usuário não encontrado.");
        setUsuario(null);
      });
  };

  const deletarUsuario = () => {
    axios
      .delete(
        `https://a1ae-160-19-45-104.ngrok-free.app/api/v1/user-clientes/${id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      )
      .then(() => {
        alert("Usuário deletado com sucesso!");
        setUsuario(null);
      })
      .catch((error) => {
        console.error("Erro ao deletar usuário:", error);
        alert("Erro ao deletar usuário.");
      });
  };

  const alterarUsuario = () => {
    axios
      .put(
        `https://a1ae-160-19-45-104.ngrok-free.app/api/v1/user-clientes/${id}`,
        usuario,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      )
      .then(() => {
        alert("Usuário alterado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao alterar usuário:", error);
        alert("Erro ao alterar usuário.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <div>
      <h1>Buscar Usuário por ID</h1>
      <input
        type="text"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div>
          <div>
            <label>Nome:</label>
            <input name="nome" value={usuario.nome} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" value={usuario.email} onChange={handleChange} />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              name="telefone"
              value={usuario.telefone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Endereço:</label>
            <input
              name="endereco"
              value={usuario.endereco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CPF/CNPJ:</label>
            <input
              name="cpfCnpj"
              value={usuario.cpfCnpj}
              onChange={handleChange}
            />
          </div>
          <button onClick={alterarUsuario}>Alterar</button>
          <button onClick={deletarUsuario}>Deletar</button>
        </div>
      )}
    </div>
  );
}

export default UsuarioPorId;
