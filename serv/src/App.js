import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Logadohome from "./Logadohome";
import Signup from "./Signup";
import Sobre from "./Sobre";
import TempLogin from "./TempLogin";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/logincliente" element={<TempLogin />} />
          <Route path="/logado" element={<Logadohome />} />
          <Route path="/cadastrocliente" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
