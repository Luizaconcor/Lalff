import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HistdeDados/Home';
import { Grafico }  from './pages/Grafico/Grafico';
import { Map } from './pages/Mapa/Mapa';
import Table  from './pages/Tabela/Tabelaa';
import  Sobre1  from './pages/Sobre/SobreNos';
import Pesquisa from './pages/Pesquisa/Pesquisa';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='grafico' element={<Grafico/>} />
        <Route path='mapa' element={<Map/>} />
        <Route path='tabela' element={<Table/>} />
        <Route path='pesquisa' element={<Pesquisa/>} />
        <Route path='sobre' element={<Sobre1/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>

);
