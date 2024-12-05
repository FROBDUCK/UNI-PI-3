import React from "react";
import Footer from "./components/Footer";
import {Header} from "./components/Header";
import ComoFunciona from "./components/ComoFunciona";
import Categorias from "./components/Categorias";
import Banner from "./components/Banner";
import ServicosPopulares from "./components/ServicosPopulares";
import WorkerList from './WorkerList';

function Home() {
  return (
    <div className="container">
      <Header/>
      <Banner />
      <Categorias />
      <section className="prof_qualif">
          <h1>Profissionais qualificados</h1>
          <WorkerList />
        </section>
      
      <ServicosPopulares />
      <ComoFunciona />
      <Footer />

    </div>
  );
};

export default Home;
