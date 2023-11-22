import React, { Component } from "react";
import { styled } from "styled-components";

import Header from "../../componets/Header/Header";
import BotaoE from "../../componets/Botao/BotaoExportar";
import Footer from "../../componets/Footer/Footer";
import { BlocoGrafico } from "../../pages/Pesquisa/style";
import { BlocoMapa } from "../../pages/Pesquisa/style";
import { BlocoTabela } from "../../pages/Pesquisa/style";
import { BlocoContainer } from "../../pages/Pesquisa/style";
import { ApexChart } from "../../pages/Grafico/Grafico";
import { ComponenteTabela } from "../../pages/Tabela/Tabela";
import { Mapa } from "../../pages/Mapa/Mapa";

const ComponenteTabelaA = styled(ComponenteTabela)`
	font-size: 15px;
	margin: 1px;
	padding: 1px;
	white-space: pre;
`;

const Pesquisa = () => {
    return (
    <div>
	<Header/>
  <BlocoContainer>
		<BlocoTabela><ComponenteTabelaA/></BlocoTabela>
		<BlocoMapa> <Mapa/> </BlocoMapa>
		<BlocoGrafico> <ApexChart/></BlocoGrafico>
	</BlocoContainer>
	<BotaoE/>
	<Footer/>
</div>
)
};

export default Pesquisa;
