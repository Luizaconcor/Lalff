import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Cabeçalho = styled.header`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: #EEF20E;
  @media screen and (min-width:280px) and (max-width:1080px) {

    position: relative;
    margin-top: -10px
  }
`;

const Links = styled.nav`
  position: absolute;
  top: 12px;
  right: 0px;
  display: inline-block;
  margin-top: 10px;
  @media screen and (min-width:280px) and (max-width:1080px) {

    display: inline-block;
    justify-content: center;
    margin-top: 50px;
    left: 5px;
    
  }
`;

const ListaLinks = styled.li`
  display: inline;
  margin: 15px;
  @media screen and (min-width:280px) and (max-width:1080px) {

    display: inline;
    margin: 2px;
    
  }
`;
const DesignLinks = styled(Link)`
  padding: 5px 13px;
  font-size: 14px;
  background-color: #EEE;
  border: 1px solid #466C8C;
  border-radius: 6px;
  color: #466C8C;
  font-weight: bold;
  transition: ease-in 0.3s;
  text-decoration: none;
  @media screen and (min-width:280px) and (max-width:1080px) {

    font-size: 7.13px;
    
  }
}
`;

export {Cabeçalho, Links, ListaLinks, DesignLinks};
