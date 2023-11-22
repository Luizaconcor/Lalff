import React, { Component } from "react";
import Chart from "react-apexcharts";

import Header from "../../componets/Header/Header";
import BotaoE from "../../componets/Botao/BotaoExportar";
import Footer from "../../componets/Footer/Footer";

const Grafico = () => {

  return (
    <div>
      <div id="chart">
        <Header/>
        <br/>
	<ApexChart/>
        <BotaoE/>



      
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
    </div>
  );
};

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "sales",
          data: [
            {
              x: "00",
              y: 26,
            },
            {
              x: "02",
              y: 43,
            },
            {
              x: "04",
              y: 44,
            },
            {
              x: "06",
              y: 47,
            },
            {
              x: "08",
              y: 54,
            },
            {
              x: "10",
              y: 58,
            },
            {
              x: "12",
              y: 69,
            },
            {
              x: "14",
              y: 32,
            },
            {
              x: "16",
              y: 60,
            },
            {
              x: "18",
              y: 45,
            },
            {
              x: "20",
              y: 69,
            },
            {
              x: "22",
              y: 10,
            },
            {
              x: "00",
              y: 40,
            },
            {
              x: "02",
              y: 43,
            },
            {
              x: "04",
              y: 44,
            },
            {
              x: "06",
              y: 47,
            },
            {
              x: "08",
              y: 54,
            },
            {
              x: "10",
              y: 58,
            },
            {
              x: "12",
              y: 69,
            },
            {
              x: "14",
              y: 55,
            },
            {
              x: "16",
              y: 60,
            },
            {
              x: "18",
              y: 40,
            },
            {
              x: "20",
              y: 69,
            },
            {
              x: "22",
              y: 20,
            },
            {
              x: "00",
              y: 40,
            },
            {
              x: "02",
              y: 43,
            },
            {
              x: "04",
              y: 44,
            },
            {
              x: "06",
              y: 47,
            },
            {
              x: "08",
              y: 54,
            },
            {
              x: "10",
              y: 58,
            },
            {
              x: "12",
              y: 69,
            },
            {
              x: "14",
              y: 47,
            },
            {
              x: "16",
              y: 60,
            },
            {
              x: "18",
              y: 30,
            },
            {
              x: "20",
              y: 69,
            },
            {
              x: "22",
              y: 40,
            },
            {
              x: "00",
              y: 40,
            },
            {
              x: "02",
              y: 43,
            },
            {
              x: "04",
              y: 44,
            },
            {
              x: "06",
              y: 47,
            },
            {
              x: "08",
              y: 54,
            },
            {
              x: "10",
              y: 58,
            },
            {
              x: "12",
              y: 69,
            },
            {
              x: "14",
              y: 19,
            },
            {
              x: "16",
              y: 60,
            },
            {
              x: "18",
              y: 34,
            },
            {
              x: "20",
              y: 69,
            },
            {
              x: "22",
              y: 30,
            },
            {
              x: "00",
              y: 40,
            },
            {
              x: "02",
              y: 43,
            },
            {
              x: "04",
              y: 44,
            },
            {
              x: "06",
              y: 47,
            },
            {
              x: "08",
              y: 54,
            },
            {
              x: "10",
              y: 58,
            },
            {
              x: "12",
              y: 59,
            },
            {
              x: "14",
              y: 32,
            },
            {
              x: "16",
              y: 60,
            },
            {
              x: "18",
              y: 20,
            },
            {
              x: "20",
              y: 69,
            },
            {
              x: "22",
              y: 20,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 50,
        },
        xaxis: {
          type: "category",
          labels: {
            
          },
          group: {
            style: {
              fontSize: "12px",
              fontWeight: 700,
            },
            groups: [
              { title: "01/11/2023", cols: 12 },
              { title: "02/11/2023", cols: 12 },
              { title: "03/11/2023", cols: 12 },
              { title: "04/11/2023", cols: 12 },
              { title: "05/11/2023", cols: 12 },
            ],
          },
        },
        title: {
          text: "Controle dos ventos (Km/h)",
        },
        tooltip: {
          x: {
            
          },
        },
      },
    };
  }

  render() {
    return (
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={380}
        />
    );
  }}


export { Grafico, ApexChart }
