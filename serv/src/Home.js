// src/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
      {/* <Link to="/sobre">
        <button>Ir para Sobre</button>
      </Link> */}

      const Home = () => {
        return (
          <div className="container">
            <div className="row" id="row1">
              <img id='logoimg' src="Logotipo.png" alt="Logo" />
              <div className="row" id="row-buttons1">
                <button className='botoesrow1' id="servico">Eu quero prestar serviço</button>
                <button className='botoesrow1' id="contratar">Eu quero contratar</button>
              </div>
              <div className="row" id="row-buttons2">
                <button id="entrar">Entrar</button>
                <button id="cadastro">Cadastro</button>
              </div>
            </div>
      
            <div className="row" id="row2">
              <div className="col" id="col-text">
                <p id='textobanner'>Encontre o serviço que você precisa com o profissional que desejar</p>
                <input type="text" placeholder="O que você está procurando?" />
              </div>
              <img id='mulherimg' src="mulher.png" alt="imagem" />
            </div>
      
            <div className="row" id="row3">
            <Link to="/sobre">
              <div className="col clickable" id="item1">
                <img src="about.webp" alt="Item 1" />
                <p>Pagina Sobre</p>
                
   
      
              </div>
              </Link>
              <div className="col clickable" id="item2">
                <img src="item2.png" alt="Item 2" />
                <p>Texto 2</p>
              </div>
              {/* Continue adicionando os itens */}
            </div>
          </div>
        );
      };
      
      export default Home;