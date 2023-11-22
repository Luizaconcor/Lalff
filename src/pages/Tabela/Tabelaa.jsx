import React, {useState} from "react";
import {StyledTable, TableRow, TableHeader} from "./style"

import { data } from "./dados";

import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";

import dadosPDF from "../../componets/Botao/BotaoPDF"




const Table = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

return (
  <div>
    <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <StyledTable>
      <thead>
        <TableRow>
          <TableHeader colSpan="15">
            Registros da estação - Vidigal
          </TableHeader>
        </TableRow>
        <tr>
          <th colSpan="15">Chuva(i)</th>
        </tr>
        <tr>
          <th rowSpan="2">HORA DA LEITURA</th>
          <th>05min</th>
          <th>10min</th>
          <th>15min</th>
          <th>30min</th>
          <th>1hora</th>
          <th>2horas</th>
          <th>3horas</th>
          <th>4horas</th>
          <th>6horas</th>
          <th>12horas</th>
          <th>24horas</th>
          <th>96horas</th>
          <th>Mensal</th>
          <th>Tx-1h</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <TableRow key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item["15min"]}</td>
            <td>{item["30min"]}</td>
            <td>{item["1h"]}</td>
            <td>{item["2h"]}</td>
            <td>{item["3h"]}</td>
            <td>{item["4h"]}</td>
            <td>{item["6h"]}</td>
            <td>{item["12h"]}</td>
            <td>{item["24h"]}</td>
            <td>{item["96h"]}</td>
            <td>{item["Mensal"]}</td>
            <td>{item["Tx-1h"]}</td>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  </div>
  
  );
};

export default function App() {

return (
    <div>
      <Header/>
      <br />
      
      <Table/>

      <button onClick={(e) => dadosPDF(data)}> Visualizar documento</button>

      <Footer/>
    </div>
  );
};
