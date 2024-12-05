// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import TempLogin from './TempLogin';
import Signup from './Signup';
import Logadohome from './Logadohome';
import Card from './components/card';
import CadastroUsuario from "./CadastroUsuario";
import ListaUsuarios from "./ListaUsuarios";
import UsuarioPorId from "./UsuarioPorId";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/TempLogin" element={<TempLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Logadohome" element={<Logadohome />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/usuario" element={<UsuarioPorId />} />

        </Routes>
        {/* <div className='cards'>
        <Card imageSrc="./images/image2.png" title="Design e tecnologia" />
        <Card imageSrc="./images/image1.png" title="Moda e beleza" />
        <Card imageSrc="./images/image3.png" title="Reparos e reformas" />
        <Card imageSrc="./images/image4.png" title="Artes" />
        </div> */}
      </div>
    </Router>
  );
};

export default App;
