import React from "react";
import "./Home.css";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { HeaderSobre } from "./components/HeaderSobre";
import ComoFunciona from "./components/ComoFunciona";
import Categorias from "./components/Categorias";
import Banner from "./components/Banner";
import ServicosPopulares from "./components/ServicosPopulares";

{
  /* <Link to="/sobre">
        <button>Ir para Sobre</button>
      </Link> */
}

const Home = () => {
  return (
    <div className="container">
      <HeaderSobre />
      <Banner />
      <Categorias />
      <ServicosPopulares />
      <ComoFunciona />
      <Footer />

      <nav>
        <a href="/cadastro">Cadastro</a> |
        <a href="/usuarios">Lista de Usuários</a> |
        <a href="/usuario">Buscar Usuário por ID</a>
      </nav>
    </div>
  );
};

export default Home;
