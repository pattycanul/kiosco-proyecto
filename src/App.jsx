import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import DivisionEstudios from './components/DivisionEstudios';
import ServiciosEscolares from './components/ServiciosEscolares';
import GestionTecnologica from './components/GestionTecnologica';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division-estudios" element={<DivisionEstudios />} />
        <Route path="/servicios-escolares" element={<ServiciosEscolares />} />
        <Route path="/gestion-tecnologica" element={<GestionTecnologica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
