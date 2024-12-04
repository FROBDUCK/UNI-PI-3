import React from "react";
import "./Home.css";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import ComoFunciona from "./components/ComoFunciona";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
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
