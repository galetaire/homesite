//makeChart, calling the data and variables from the .csv file
function makeChart(goldrush) {
  var rangeStart = 160-2
  var rangeEnd = new Date().getFullYear() - 1680
  var rangeLabels = goldrush.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = goldrush.map(function(d) {return d.gold_rush}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('goldrush', {
    options: {
      scales: {
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 90,
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || '';
              const value = Math.round(context.parsed.y); // Round Y value
              return `${label}: ${value}`;
            }
          }
        }
      }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: "Febres de l'or",
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(232, 181, 10, 0.5)',
          borderColor: 'rgba(143, 124, 15, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 2,
          fill: false,
          tension: 0.4
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/homesite/main/public/gold.csv')
  .then(makeChart);
