import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


function dadosPDF(chuva){
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: 'Registros de chuva na estação - Vidigal',
      fontSize: 15,
      bold: true,
      margin: [15,20,0,45]
    }

  ];

  const dados = chuva.map((data) =>{
    return [
      { text: data.id, fontSize: 8, margin: [0,2,0,2] },
      { text: data.name, fontSize: 8, margin: [0,2,0,2] },
      { text: data.description, fontSize: 8, margin: [0,2,0,2] },
      { text: data["15min"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["30min"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["1h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["2h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["3h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["4h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["6h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data["12h"], fontSize: 8 , margin: [0,2,0,2]},
      { text: data["24h"], fontSize: 8 , margin: [0,2,0,2]},
      { text: data["96h"], fontSize: 8, margin: [0,2,0,2] },
      { text: data.Mensal, fontSize: 8 , margin: [0,2,0,2]},
      { text: data["Tx-1h"], fontSize: 8 , margin: [0,2,0,2]},
    ]
  })

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
        body: [
          [
            { text: 'Hora da Leitura', style:'tableHeader', fontSize: 10},
            { text: '5 min', style:'tableHeader', fontSize: 10},
            { text: '10 min', style:'tableHeader', fontSize: 10},
            { text: '15 min', style:'tableHeader', fontSize: 10},
            { text: '30 min', style:'tableHeader', fontSize: 10},
            { text: '1 hora', style:'tableHeader', fontSize: 10},
            { text: '2 horas', style:'tableHeader', fontSize: 10},
            { text: '3 horas', style:'tableHeader', fontSize: 10},
            { text: '4 horas', style:'tableHeader', fontSize: 10},
            { text: '6 horas', style:'tableHeader', fontSize: 10},
            { text: '12 horas', style:'tableHeader', fontSize: 10},
            { text: '24 horas', style:'tableHeader', fontSize: 10},
            { text: '96 horas', style:'tableHeader', fontSize: 10},
            { text: 'Mensal', style:'tableHeader', fontSize: 10},
            { text: 'Tx-1h', style:'tableHeader', fontSize: 10},
          ],
          ...dados
        ]
      },
      layout: 'headerLineOnly'

    }

  ];

  function Rodape(currentPage, pageCount){
    return[
      {
        text: currentPage + ' / ' + pageCount,
        alignment: 'right',
        fontSize: 7,
        margin: [0,10,20,0]
      }
    ]

  }

  const docDefinitios = {
    pageSize: 'Apm',
    pageMargins: [15,50,15,50],

    header: [reportTitle],
    content: [details],
    footer: Rodape

  }

  pdfMake.createPdf(docDefinitios).download();

}

export default dadosPDF;


