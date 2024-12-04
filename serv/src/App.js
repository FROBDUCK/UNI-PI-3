import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './Home';  
import Sobre from './Sobre';  
import TempLogin from './TempLogin';
import Logadohome from './Logadohome'; 
import LoginCliente from './LoginCliente';
import Signup from './Signup';
import ListaUsuarios from "./ListaUsuarios";  
import UsuarioPorId from "./UsuarioPorId";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} /> 
          <Route path="/login" element={<LoginCliente />} />
          <Route path="/Logadohome" element={<Logadohome />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/usuarios" element={<ListaUsuarios />} />
          <Route path="/usuario" element={<UsuarioPorId />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
