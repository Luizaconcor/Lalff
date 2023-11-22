import React from "react";
import { Chart } from "react-google-charts";

import LinkHome from "../../componets/Links/LinkHome";
import LinkGrafico from "../../componets/Links/LinkGrafico";
import LinkMapa from "../../componets/Links/LinkMapa";
import LinkTabela from "../../componets/Links/LinkTabela";

export const data = [
  [
    "Horas",
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "Velocidade do vento (Km/h)",
    "Chuva",
  ],
  ["30/10/2023", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 50, 10],
  ["31/10/2023", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 35, 20],
  ["01/11/2023", 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 20, 30],
];

export const options = {
  title: "Controle dos ventos",
  vAxis: { title: "Km/h" },
  hAxis: { title: "Dias" },
  seriesType: "bars",
  series: { 13: { type: "line" } },
};

export default function App() {
  return (
    <div>
      <LinkHome/>
      <LinkGrafico/>
      <LinkMapa/>
      <LinkTabela/>

      <Chart
        chartType="ComboChart"
        width="800px"
        height="600px"
        data={data}
        options={options}
      />   
    </div>
  );
};