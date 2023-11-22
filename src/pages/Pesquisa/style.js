import { styled } from "styled-components";

const BlocoContainer = styled.div`
	width: 80%;
	font-size: 3vw;
	border: 2 solid black;
	text-align: center;
	margin-inline: 5% 2%;
        margin: 0 auto;
`;

const BlocoTabela = styled.div`
	display: inline-block;
	border: 2px solid black
	font-size: 5px;
        max-height: 60vw;
        overflow-x: auto;
        height: 600px;
`;

const BlocoMapa = styled.div`
        display: inline-block;
        margin-right: 0vw;
        margin-top: 1vw;
        font-size: 3vw;
        text-align: center;
        min-width: 40vw;
        float: right;
	border: 2px solid black
	height: 600px;
	overflow-x: auto;
`;



const BlocoGrafico = styled.div`
        margin-right: 0vw;
        font-size: 3vw;
        text-align: center;
        padding: 5vw 0vw 5vw 0vw;
        min-width: 40vw;
        margin: 0 auto;

`;




export {BlocoContainer, BlocoGrafico, BlocoMapa, BlocoTabela}
