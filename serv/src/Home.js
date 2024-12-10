import React from "react";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import ComoFunciona from "./components/ComoFunciona";
import Footer from "./components/Footer";
import { CardList } from './components/Card';
import { Header } from "./components/Header";

import WorkerList from "./WorkerList";

function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Categorias />
      <section className="prof_qualif">
        <h1>Profissionais qualificados</h1>
        <WorkerList />
      </section>
      <CardList />
      <ComoFunciona />
      <Footer />
    </div>
  );
}

export default Home;
