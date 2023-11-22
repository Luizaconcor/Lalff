import React, { useState } from "react";
import { Rodape, Lista, ListaItem, ListaÍcone } from "./style";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <Rodape>
            <Lista>
                <ListaItem>Home</ListaItem>
                <ListaItem>Contato</ListaItem>
                <ListaÍcone><FaWhatsappSquare/></ListaÍcone>
                <ListaÍcone><FaLinkedin /></ListaÍcone>
            </Lista>
        </Rodape>
    );
};

export default Footer;
