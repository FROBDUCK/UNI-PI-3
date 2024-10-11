// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Card from './components/card';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <div className='cards'>
        <Card imageSrc="./images/image2.png" title="Design e tecnologia" />
        <Card imageSrc="./images/image1.png" title="Moda e beleza" />
        <Card imageSrc="./images/image3.png" title="Reparos e reformas" />
        <Card imageSrc="./images/image4.png" title="Artes" />
        </div>
      </div>
    </Router>
  );
};

export default App;
