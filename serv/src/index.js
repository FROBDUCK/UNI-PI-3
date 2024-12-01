import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import App from './App';
import Sobre from './Sobre';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/sobre" element={<Sobre />} /> {/* Página "Sobre Nós" */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

