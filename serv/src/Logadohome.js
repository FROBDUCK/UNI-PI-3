// src/LogadoHome.js
import React, { useEffect, useState } from 'react';

function LogadoHome() {
  const [perfilNome, setPerfilNome] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('sessionToken'); // Altere para 'sessionToken'
    if (token) {
      fetch('https://parseapi.back4app.com/users/me', {
        headers: {
          'X-Parse-Application-Id': 'S2pTPmR8V42bT7X3ChMEUSvzpExRtPo507sHOfg7',
          'X-Parse-REST-API-Key': 'Ho7Y4obYjQL1C6of8Yaxedqh440OYRP9c2jm9IMe',
          'X-Parse-Session-Token': token,
        },
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar dados do usuário'); // Adiciona um erro para a resposta não OK
        }
        return res.json();
      })
      .then((data) => {
        // Verifique se o campo username existe e utilize-o
        setPerfilNome(data.username || 'Usuário'); // Ajuste aqui se o campo for diferente
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Não foi possível carregar os dados do usuário.');
      });
    }
  }, []);

  return (
    <div>
      <h1>Bem-vindo, {perfilNome}</h1>
    </div>
  );
}

export default LogadoHome;
