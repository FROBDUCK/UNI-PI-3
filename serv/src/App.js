import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CadastroUsuario from "./CadastroUsuario";
import ScrollToTop from './components/ScrollToTop';
import Home from './Home';
import ListaUsuarios from "./ListaUsuarios";
import Logadohome from './Logadohome';
import Signup from './Signup';
import Sobre from './Sobre';
import TempLogin from './TempLogin';
import UsuarioPorId from "./UsuarioPorId";
import WorkerDetails from './WorkerDetails';
import WorkerList from './WorkerList';

const App = () => {
  // Chama a URL de inicialização ao montar o componente
  useEffect(() => {
    const initializeData = async () => {
      try {
        const response = await fetch('http://localhost:8080/initialize-data', {
          method: 'GET',
        });
        if (!response.ok) {
          console.error('Erro ao inicializar os dados:', response.statusText);
        } else {
          console.log('Dados inicializados com sucesso!');
        }
      } catch (error) {
        console.error('Erro na chamada da URL de inicialização:', error);
      }
    };

    initializeData();
  }, []); // O array vazio [] garante que isso seja executado apenas uma vez

  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/workers" element={<WorkerList />} />
          <Route path="/workers/:id" element={<WorkerDetails />} /> {/* Página de detalhes */}
      
        </Routes>
      </div>
    </Router>
  );
};

export default App;