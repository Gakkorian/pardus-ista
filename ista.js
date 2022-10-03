// JSON datasının çektiğimiz fonksiyon.
function updateCharti() {
  async function fetchDatai(){
    const urli = 'https://raw.githubusercontent.com/Gakkorian/pardus-ista/main/2021-ista.json';
    const responsei = await fetch(urli);
    const datapointsi = await responsei.json();
    //console.log(datapointsi);
    return datapointsi;

  };
  // Burada JSON dosyası okunup map() fonksiyonundan geçiriliyor.
  fetchDatai().then(datapointsi => {
    const month =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Ay;
    })
    const Pardus21S =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Server;
    })
    const Pardus19S =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Server;
    })
    const Pardus21g =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Gnome;
    })
    const Pardus21x =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus21Xfce;
    })
    const Pardus19g =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Gnome;
    })
    const Pardus19x =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus19Xfce;
    })
    const Pardus17S =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus17Server;
    })
    const Pardus17x =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.Pardus17Xfce;
    })
    const PardusToplam =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.PardusToplam;
    })
    const EtapToplam =datapointsi.indirmeler[0].pardus.map(function(index){
      return index.PardusEtap;
    })
    // Burada kontrol için console çıktılarına bakıyoruz.
   
    /* console.log(month);
    console.log(Pardus21);
    console.log(Pardus19);
    console.log(Pardus21g);
    console.log(Pardus19g);
    console.log(Pardus21x);
    console.log(Pardus19x);*/
    
    // Burada JSOn dosyasından okunan değerler charta yazılıyor.
   
    myCharti.data.labelss=month;
    myCharti.data.datasets[0].data=PardusToplam;
    /*myCharti.data.datasets[1].data=Pardus19S;
    myCharti.data.datasets[2].data=Pardus17S;
    myCharti.data.datasets[3].data=Pardus21g;
    myCharti.data.datasets[4].data=Pardus21x;
    myCharti.data.datasets[5].data=Pardus19g;
    myCharti.data.datasets[6].data=Pardus19x;
    myCharti.data.datasets[7].data=Pardus17x;*/
    myCharti.update();

    /*myChartLi.data.labelss=month;
    myChartLi.data.datasets[0].data=Pardus21g;
    myChartLi.data.datasets[1].data=Pardus21x;
    myChartLi.update();

    myChartKi.data.labelss=month;
    myChartKi.data.datasets[0].data=Pardus19g;
    myChartKi.data.datasets[1].data=Pardus19x;
    myChartKi.update();

    myChartJi.data.labelss=month;
    myChartJi.data.datasets[0].data=Pardus21S;
    myChartJi.data.datasets[1].data=Pardus19S;
    myChartJi.data.datasets[2].data=Pardus17S;
    myChartJi.update();

    myChartTi.data.labelss=month;
    myChartTi.data.datasets[0].data=PardusToplam;
    myChartTi.data.datasets[1].data=EtapToplam;
    myChartTi.update();

   /* myChartEi.data.labelss=month;
    myChartEi.data.datasets[0].data=EtapToplam;
    myChartEi.update();*/
  });
}
updateCharti();
const labelss = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
let delayeds;
const ctxi = document.getElementById('myCharti').getContext('2d');
const myCharti = new Chart(ctxi, {
  type: "line",
  data: {
    labels: labelss,
    datasets: [{
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      label: 'Pardus',
      borderColor: "orange",
      fill: true,
      pointStyle: 'circle',
      pointRadius: 8,
      pointHoverRadius: 12,
      tension: 0.5
    }/*, { 
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
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
            text: 'Pardus 2021 İndirme İstatistiği',
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
/*const ctx1i = document.getElementById('myChart21i').getContext('2d');
const myChartLi = new Chart(ctx1i, {
  type: "line",
  data: {
    labels: labelss,
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
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
const ctx2i = document.getElementById('myChart19i').getContext('2d');
const myChartKi = new Chart(ctx2i, {
  type: "line",
  data: {
    labels: labelss,
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
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
const ctx3i = document.getElementById('myChartSi').getContext('2d');
const myChartJi = new Chart(ctx3i, {
  type: "line",
  data: {
    labels: labelss,
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
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
            text: 'Pardus 21&19&17 Server İstatistikleri',
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
const ctx4i = document.getElementById('myChartTi').getContext('2d');
const myChartTi = new Chart(ctx4i, {
  type: "line",
  data: {
    labels: labelss,
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
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
/*const ctx5i = document.getElementById('myChartEi').getContext('2d');
const myChartEi = new Chart(ctx5i, {
  type: "line",
  data: {
    labels: labelss,
    datasets: [
    { 
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: "blue",
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
    responsive: true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay=0;
            if(context.type === 'data' && context.mode === 'default' && !delayeds) {
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
            text: 'ETAP Toplam İndirme İstatistikleri',
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
function downloadi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myCharti');
  imageLink.download = "2021-İstatislik-PardusOS.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
/* function downloadLi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChart21i');
  imageLink.download = "2021-İstatislik-PardusOS-21.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadKi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChart19i');
  imageLink.download = "2021-İstatislik-PardusOS-19.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadJi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartSi');
  imageLink.download = "2021-İstatislik-PardusOS-Server.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
function downloadTi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartTi');
  imageLink.download = "2021-İstatislik-PardusOS-total-download.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}
/*function downloadEi(){
  const imageLink = document.createElement('a');
  const canvas = document.getElementById('myChartEi');
  imageLink.download = "2021-İstatislik-ETAP-total-download.png";
  imageLink.href = canvas.toDataURL('image/png',0);
  imageLink.click();
}*/
// Chart'ı PDF olarak indirdme işlemi fonksiyonu.
function downloadPDFi(){
  const canvas = document.getElementById('myCharti');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2021-İstatislik-PardusOS-download-count.pdf');
}
/*function downloadPDFLi(){
  const canvas = document.getElementById('myChart21i');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2021-İstatislik-PardusOS-21-download-count.pdf');
}
function downloadPDFKi(){
  const canvas = document.getElementById('myChart19i');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2021-İstatislik-PardusOS-19-download-count.pdf');
}
function downloadPDFJi(){
  const canvas = document.getElementById('myChartSi');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2021-İstatislik-PardusOS-Server-download-count.pdf');
}
function downloadPDFTi(){
  const canvas = document.getElementById('myChartTi');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 10, 280, 180);
  pdf.save('2021-İstatislik-PardusOS-total-count.pdf');
}
/*function downloadPDFEi(){
  const canvas = document.getElementById('myChartEi');
  const canvasImage = canvas.toDataURL('image/png', 0);
  console.log(canvasImage);
  let pdf = new jsPDF('landscape');
  pdf.setFontSize(15);
  pdf.addImage(canvasImage, 'PNG', 5, 5, 280, 150);
  pdf.save('2021-İstatislik-ETAP-total-count.pdf');
}*/