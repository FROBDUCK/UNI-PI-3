import React from "react";
import './Banner.css';

const Banner = () => {
    return (
        <div className="row" id="row2">
              <div className="col" id="col-text">
                <p id='textobanner'>Encontre o <a id="focus">serviço</a> que você precisa com o profissional que desejar</p>
                <div class="div-pesquisa">
                  <input id="busca" type="text" placeholder="O que você está procurando?" />
                  <button id="pesquisar"><i class="fas fa-search"></i></button>
                </div>
              </div>
              <img id='mulherimg' src="mulher.png" alt="imagem" />
            </div>
    )
}

export default Banner;