
export function getOptions(width) {        
    const optionsVertical = {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: { // сетка по шкале y
            display: true
          },
          ticks: { // подпись по шкале y
            display: true
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: false,  
        },
        tooltip: { 
          enabled: true,       
         // bodyColor: '#000',  
          displayColors: false,
          yAlign: 'bottom',         
        },   
      },
    };

    const optionsHorizontal = {
      maintainAspectRatio: false,
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,         
        },
      },
    };

  const options = width < 768 ? optionsHorizontal : optionsVertical;

  return options;
}
  
// scales: {
  // xAxes: [{
      // gridLines: {display:false}
  // }]
// }
