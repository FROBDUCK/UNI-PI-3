import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './Home';  
import Sobre from './Sobre';  
import TempLogin from './TempLogin';
import CadastroCliente from './CadastroCliente';
import Logadohome from './Logadohome'; 
import LoginCliente from './LoginCliente';
import Signup from './Signup';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} /> 
          <Route path="/logincliente" element={<LoginCliente />} />
          <Route path="/logado" element={<Logadohome />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
