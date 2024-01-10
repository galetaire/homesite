// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

//data
const data = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'House price',
      type: 'bar',
      data: [2035102,42857,24770,1067,335,508,243,37,23.1,21.8,13.4,3.7,6.1,5.9],
      backgroundColor: 'rgba(247, 147, 26, 1)',
      borderColor: 'rgba(9, 9, 9, 1)',
      borderWidth: 1,
      borderDash: [0,1],
      pointStyle: 'circle',
      pointRadius: 3,
      fill: false
    }]
};

//config
const config = {
  type: 'bar',
  data,
  plugins: [plugin],
  options: {
    layout: {
    padding: 5
    },
    title: {
        display: false,
        fontColor: 'white',
        text: 'How many bitcoins do you need to buy a house?'
            },
    legend: {
      display: false
    },
    plugins: {
       customCanvasBackgroundColor: {
       color: 'rgb(255, 255, 255, 1)',
          }
        },
      scales: {
          xAxes: [{
            gridLines: {
              color: 'rgba(30, 30, 30, 0.9)',
            },
              ticks: {
                fontSize: 15,
                fontColor: 'white',
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
                beginAtZero: true
              }
          }],
          yAxes: [{
            display: true,
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              fontSize: 15,
              fontColor: 'white',
              labelString: 'Bitcoins'
             },
            gridLines: {
              color: 'rgb(255, 255, 255, 1)',
            },
              ticks: {
                  fontSize: 8,
                  fontColor: 'white',
                  beginAtZero: true
              }
          }],
      },
  },
    plugins: [plugin],
};

//render init block
const rainbow = new Chart(
  document.getElementById('bitcoin'),
  config
);
