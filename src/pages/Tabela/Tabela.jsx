import React, {useState} from "react";

import {StyledTable, TableRow, TableHeader} from "./style"

import styled from "styled-components";

import { data } from "./dados";

import Header from "../../componets/Header/Header";
import BotaoE from "../../componets/Botao/BotaoExportar";
import Footer from "../../componets/Footer/Footer";


const HiddenElement = styled.div`
    visibility: hidden;
`;



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width:280px) and (max-width:1080px) {
	    font-size: 5px;
	    justify-content: center;
    }
`;



const Caixa = styled.div`
    width: 100%;
    max-width: 414px;
    background-color: #ccc;
    padding: 10px;
    border: 1px solid #999;
    margin: 10px 0;
    line-height: 1; 
    /* Define a altura da linha para remover o espa\u00e7o entre as caixas */

`;



const Linha = styled.hr`
    border: none;
    border-top: 2px solid #000000;
    margin: 10px 0;
    
    @media screen and (min-width:280px) and (max-width:1080px) {
	    font-size: 5px;
	    justify-content: center;
    }

`;



const Texto = styled.p`
    margin: 0;
    padding: 1px;
    white-space: pre;
    
    @media screen and (min-width:280px) and (max-width:1080px) {
	    font-size: 15px;
	    justify-content: center;
    }
`;
const TextoComEspacamento = styled.p`
    margin: 0;
    padding: 1px;
    white-space: pre;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        font-size: 15px;
        justify-content: justify;
    }

    &.leitura,
    &.valores {
        display: flex;
        flex-wrap: wrap;
        align-items: justify;
    }

    &.leitura span,
    &.valores span {
        margin-right: 10px; /* Ajuste o espaçamento horizontal conforme necessário */
    }

    &.leitura br,
    &.valores br {
        display: none; /* Remova as quebras de linha */
    }
`;

const ComponenteTabela = ({className}) => {
    return (
    <div>
        <Container>
            <>
                <Caixa>
                <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 23:50 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       0,0            0,0              0,0</span>
                    </TextoComEspacamento>


                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 23:55 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       0,0            0,0              0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:00 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       0,0            0,0              0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:05 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       31,6         45,2             0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:10 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       15,6           18              0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:15 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       18,8         19,8             0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:20 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       9,2           19,4             0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:25 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       22            25,8             0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:30 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       31,4         34,4             0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:35 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       30,6          33,2            0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:40 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       74,2          78,4            0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:45 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       12,6          20,6            0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:50 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       17,8           30              0,0</span>
                    </TextoComEspacamento>
                </Caixa>
                <Caixa
                    style={{
                        marginTop: "-10px"
                    }}>
                    <Texto className={className}>REGISTROS
                        DA ESTAÇÃO - BARRA DA TIJUCA
                    </Texto>
                    <Texto className={className}>10/10/2023
                        - 00:55 - Chuva(i)
                    </Texto>
                    <div>
                        <HiddenElement>
                            <p></p>
                        </HiddenElement>
                    </div>
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>05min     10min     15min     30min     1h       2h       3h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>     0,0           0,0          0,0         0,0         0,0      0,0      0,0</span>
                    </TextoComEspacamento>

                    <Linha />
                    <TextoComEspacamento className={`${className} leitura`}>
                        <span></span>
                        <span>4h      6h      12h      24h      96h        Mensal        Tx-1h</span>
                    </TextoComEspacamento>

                    <TextoComEspacamento className={`${className} valores`}>
                        <span>   0,0     0,0     0,0       0,0       4,8            12,6            0,0</span>
                    </TextoComEspacamento>
                </Caixa>
            </>
        </Container>
        </div>
    );

};

const TabelaPage = () => {
	return (
	<div>
    <Header/>
    <br></br><br></br>
    <ComponenteTabela/>
    <BotaoE/>
    <Footer/>
    </div>
	)
}



export {TabelaPage, ComponenteTabela};
