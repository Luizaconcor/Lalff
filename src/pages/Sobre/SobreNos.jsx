import React from "react";

import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";

import luiza from "./lu.jpg"
import lua from "./lua.jpg"
import fabiano from "./fafa.jpg"
import fernanda from "./fe.jpg"
import anna from "./anna.jpg"

import lalff from "./logolalff.png"

import {ItensFotos, Nomes, LogoLALFF, Texto} from "./style"

const FotoLuiza = () => {
  return (
    <div>
      <img src={luiza} alt="Foto da Luiza" />
    </div>
  );
}

const FotoLua = () => {
  return (
    <div>
      <img src={lua} alt="Foto do Luã" />
    </div>
  );
}

const FotoFabiano = () => {
  return (
    <div>
      <img src={fabiano} alt="Foto do Fabiano" />
    </div>
  );
}

const FotoFernanda = () => {
  return (
    <div>
      <img src={fernanda} alt="Foto da Fernanda" />
    </div>
  );
}

const FotoAnna = () => {
  return (
    <div>
      <img src={anna} alt="Foto da Anna" />
    </div>
  );
}

const Logolalff = () => {
  return (
    <div>
      <img src={lalff} alt="Logo LALFF" />
    </div>
  );
}



const Sobre1 = () => {
  return (
    <div>
      <Header/>

      <br/>
      <br/>

      <LogoLALFF>
        <Logolalff/>
      </LogoLALFF>

      <br/>
  
      <br/>

      <Texto> Nós do grupo LALFF, nos unimos para buscar uma solução para a Nimbus. Nossos integrantes são:</Texto>

      <br/>

      <ItensFotos>

        <div>
          <FotoFabiano/>
          <Nomes>Fabiano Amorim</Nomes>
        </div>
        
        <div>
          <FotoFernanda/>
          <Nomes>Fernanda Camacho</Nomes>
        </div>

        <div>
          <FotoLua/>
          <Nomes>Luã Macedo</Nomes>
        </div>

        <div>
          <FotoLuiza/>
          <Nomes>Luiza Conrado</Nomes>
        </div>

        <div>
          <FotoAnna/>
          <Nomes>Anna Flores</Nomes>
        </div>

      </ItensFotos>


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

}

export default Sobre1;