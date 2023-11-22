import { styled } from "styled-components";

const Rodape = styled.div`
  background-color: #3161A8;
  padding: 5px;
  position: relative;
  height: 3.5rem;
  margin: 0 auto;
  @media screen and (min-width:280px) and (max-width:1080px) {
  
    margin-top: -9px;
  }
`;

const ListaItem = styled.li`
  color: white;
  padding: 5px;
  text-font: inter;
  display: inline;
  margin: 10px;
  font-weight: bold;
`;

const Lista = styled.ul`
  list-style: none;
  position: absolute;
  bottom: 0;
  width: 100%;

  margin: 5px;
  overflow: hidden;
`;

const ListaÍcone = styled.li`
  padding: 6px;
  display: inline;
  float: right;
`;

export {Rodape, Lista, ListaItem, ListaÍcone};