// JSON datasının çektiğimiz fonksiyon.
function updateChart() {
  async function fetchData(){
    const url = 'https://raw.githubusercontent.com/Gakkorian/pardus-ista/main/2022-ista.json';
    const response = await fetch(url);
    const datapoints = await response.json();
    // console.log(datapoints);
    // Üstteki log da Json dosyasını 
    return datapoints;

  };
  // Burada JSON dosyası okunup map() fonksiyonundan geçiriliyor.
  fetchData().then(datapoints => {
    const month =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Ay;
    })
    const Pardus21S =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Server;
    })
    const Pardus19S =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Server;
    })
    const Pardus21g =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Gnome;
    })
    const Pardus21x =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Xfce;
    })
    const Pardus19g =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Gnome;
    })
    const Pardus19x =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Xfce;
    })
    const Pardus17S =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus17Server;
    })
    const Pardus17x =datapoints.indirmeler[0].pardus.map(function(index){
      return index.Pardus17Xfce;
    })
    const PardusToplam =datapoints.indirmeler[0].pardus.map(function(index){
      return index.PardusToplam;
    })
    const EtapToplam =datapoints.indirmeler[0].pardus.map(function(index){
      return index.PardusEtap;
    })
    // Burada kontrol için console çıktılarına bakıyoruz.
   
    /* 
    console.log(month);
    console.log(Pardus21);
    console.log(Pardus19);
    console.log(Pardus21g);
    console.log(Pardus19g);
    console.log(Pardus21x);
    console.log(Pardus19x);
    */
    
    // Burada JSOn dosyasından okunan değerler charta yazılıyor.
   
    myChart.data.labels=month;
    myChart.data.datasets[0].data=PardusToplam;
    /*myChart.data.datasets[1].data=Pardus19S;
    myChart.data.datasets[2].data=Pardus17S;
    myChart.data.datasets[3].data=Pardus21g;
    myChart.data.datasets[4].data=Pardus21x;
    myChart.data.datasets[5].data=Pardus19g;
    myChart.data.datasets[6].data=Pardus19x;
    myChart.data.datasets[7].data=Pardus17x;*/
    myChart.update();

    /*myChartL.data.labels=month;
    myChartL.data.datasets[0].data=Pardus21g;
    myChartL.data.datasets[1].data=Pardus21x;


    myChartK.data.labels=month;
    myChartK.data.datasets[0].data=Pardus19g;
    myChartK.data.datasets[1].data=Pardus19x;
    myChartK.update();

    myChartJ.data.labels=month;
    myChartJ.data.datasets[0].data=Pardus21S;
    myChartJ.data.datasets[1].data=Pardus19S;
    myChartJ.update();

    myChartT.data.labels=month;
    myChartT.data.datasets[0].data=PardusToplam;
    myChartT.data.datasets[1].data=EtapToplam;
    myChartT.update();*/

   /* myChartE.data.labels=month;
    myChartE.data.datasets[0].data=EtapToplam;
    myChartE.update();*/
  });
}
updateChart();
const labels = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık99999"];
let delayed;
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    {
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      label: 'Pardus',
      borderColor: "orange",
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
    /*{
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      label: 'Pardus 21 Server',
      borderColor: "red",
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }, { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "green",
      label: 'Pardus 19 Server',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "pink",
      label: 'Pardus 17 Server',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }, 
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'Pardus 21 GNOME',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "gray",
      label: 'Pardus 21 XFCE',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "yellow",
      label: 'Pardus 19 GNOME',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "black",
      label: 'Pardus 19 XFCE',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "purple",
      label: 'Pardus 17 XFCE',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }*/
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    scales: {
          y: {
            suggestedMin: 0,
          }
        },
    responsive: true,
   animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'Pardus 2022 İndirme İstatistiği',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
        
    }
    
  }
});
/*const ctx1 = document.getElementById('myChart21').getContext('2d');
const myChartL = new Chart(ctx1, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'Pardus 21 GNOME',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "orange",
      label: 'Pardus 21 XFCE',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'Pardus 21 İstatistikleri',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
        
    }
    
  }
});
const ctx2 = document.getElementById('myChart19').getContext('2d');
const myChartK = new Chart(ctx2, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'Pardus 19 GNOME',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "orange",
      label: 'Pardus 19 XFCE',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'Pardus 19 İstatistikleri',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
        
    }
    
  }
});
const ctx3 = document.getElementById('myChartS').getContext('2d');
const myChartJ = new Chart(ctx3, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'Pardus 21 Server',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "orange",
      label: 'Pardus 19 Server',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'Pardus 21 ve 19 Server İstatistikleri',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
        
    }
    
  }
});
const ctx4 = document.getElementById('myChartT').getContext('2d');
const myChartT = new Chart(ctx4, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'Pardus Toplam İndirme',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    },
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "orange",
      label: 'ETAP Toplam İndirme',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    scales: {
          y: {
            suggestedMin: 0,
          }
        },
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'Pardus ve ETAP Toplam İndirme İstatistikleri',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
    }
    
  }
});
/*const ctx5 = document.getElementById('myChartE').getContext('2d');
const myChartE = new Chart(ctx5, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
      label: 'ETAP',
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }
  ]
  },
 
  // Chart 'ın özelliklerini belirlediğimiz kısım animasyon, lejand, açıklama kutusu ...
  options: {
    scales: {
          y: {
            suggestedMin: 0,
          }
        },
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayed) {
                delay=context.dataIndex * 300 + context.dataIndex * 100;
            }
            return delay;
        }
    },
    layout: {
        padding: 10
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
        tooltip:{
          position: 'nearest',
          callbacks: {
        }
      },
        legend: {
        position: 'top',
            labels: {
                font: {
                    weight: 'bold',
                    size: 14
                },
                padding: 25
            }
    },
        title: {
            display: true,
            text: 'ETAP İndirme İstatistikleri',
            font: {
                weight: 'bolder',
                size: 18
            },
            padding: {
                top: 15,
                bottom: 15
            }
        },
    }
    
  }
});
*/
// Chart'ı resim olarak indirmme işlemi fonksiyonu.
function download(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChart');
  imageLink.download = "2022-İstatislik-PardusOS.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}

/*
function downloadL(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChart21');
  imageLink.download = "2022-İstatislik-PardusOS-21.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadK(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChart19');
  imageLink.download = "2022-İstatislik-PardusOS-19.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadJ(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartS');
  imageLink.download = "2022-İstatislik-PardusOS-Server.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadT(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartT');
  imageLink.download = "2022-İstatislik-PardusOS-Total.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
/*function downloadE(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartE');
  imageLink.download = "2022-İstatislik-ETAP-Total.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}*/

// Chart'ı PDF olarak indirdme işlemi fonksiyonu.
function downloadPDF(){
  const canvas = document.getElementById('myChart');
  const canvasImage = canvas.toDataURL('image/png', 0);
  //console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2022-İstatislik-PardusOS-download-count.pdf');
}
/*
function downloadPDFL(){
  const canvas = document.getElementById('myChart21');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 200);
  pdf.save('2022-İstatislik-PardusOS-21-download-count.pdf');
}
function downloadPDFK(){
  const canvas = document.getElementById('myChart19');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 200);
  pdf.save('2022-İstatislik-PardusOS-19-download-count.pdf');
}
function downloadPDFJ(){
  const canvas = document.getElementById('myChartS');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 200);
  pdf.save('2022-İstatislik-PardusOS-Server-download-count.pdf');
}
function downloadPDFT(){
  const canvas = document.getElementById('myChartT');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 200);
  pdf.save('2022-İstatislik-PardusOS-total-download-count.pdf');
}
/*function downloadPDFE(){
  const canvas = document.getElementById('myChartE');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 150);
  pdf.save('2022-İstatislik-Etap-total-download-count.pdf');
}*/
