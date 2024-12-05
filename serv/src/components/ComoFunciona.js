import React from "react";
import "./ComoFunciona.css";

const ComoFunciona = () => {
  return (
    <div className="como-funciona-container">
      <h1>Como a Serv funciona?</h1>
      <div class="secoes">
        <div class="secao1">
          <i class="fas fa-search"></i>
          <h4>Pesquisa simples</h4>
          <p>
            Busque por um serviço usando a barra de pesquisa ou encontre uma
            categoria adequada no menu de navegação.
          </p>
        </div>
        <div class="secao2">
          <i class="fas fa-user"></i>
          <h4>Seleção simples</h4>
          <p>
            Escolha um serviço com base em classificações, nivel e avaliações.
          </p>
        </div>
        <div class="secao3">
          <i class="fas fa-comments"></i>
          <h4>Facilidade de contratação</h4>
          <p>
            Contrate freelancers com segurança e praticidade, com comunicação
            direta via WhatsApp para marcar encontros e alinhar detalhes de
            forma simples e rápida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;
