import React,  { useState } from "react";

import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";

import {Caixa} from "./style"
import BotaoP from "../../componets/Botao/BotaoPesquisar";

const Home = () => {

  return (
    <div>
      <Header/>
      <Caixa>
      <br></br><br></br>
        <label> Início: 
          <input
            type="date"
          />
        </label>

        <label> Fim: 
          <input
            type="date"
          />
        </label>

        <label> Variáveis: 
          <input
            type="text"
          />
        </label>

        <label> Frequência: 
          <input
            type="text"
          />
        </label>

        <br />
        <br />

        <label> Estação: 
          <input
            type="text"
          />
        </label>

        <label><strong> ou</strong> <p>Ponto de monitoramento: </p>
          <input
            type="text"
          />
        </label>

        <label> Operação: 
          <input
            type="text"
          />
        </label>
      </Caixa>  

      <BotaoP/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Footer/>

    </div>
  );
};

export default Home;
