import React,  { useState } from "react";

import {Cabeçalho, Links, ListaLinks, DesignLinks} from "./style";
import Logo from "./Logo";

const Header = () => {


  return (
    <div>
      <br></br>
      <Cabeçalho>
        <Logo/>  
        <Links>
          <ListaLinks>
            <DesignLinks to={`/`} activeClassName="active">Histórico de dados</DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks to={`/tabela`} activeClassName="active">Tabela</DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks to={`/mapa`} activeClassName="active">Mapa</DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks to={`/grafico`} activeClassName="active">Grafico</DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks to={`/sobre`} activeClassName="active">Sobre</DesignLinks>
          </ListaLinks>
        </Links>
      </Cabeçalho>
    </div>
  );
};

export default Header;
