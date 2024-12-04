import React from "react";
import "./Home.css";
import Footer from "./components/Footer";
import {Header} from "./components/Header";
import ComoFunciona from "./components/ComoFunciona";
import Categorias from "./components/Categorias";
import Banner from "./components/Banner";
import ServicosPopulares from "./components/ServicosPopulares";

function Home() {
  return (
    <div className="container">
      <Header/>
      <Banner />
      <Categorias />
      <ServicosPopulares />
      <ComoFunciona />
      <Footer />

    </div>
  );
};

export default Home;
