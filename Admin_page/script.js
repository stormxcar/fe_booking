const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

// Vẽ biểu đồ
const xValues = [0,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000];
const yValues = [17000,18000,18000,25689,19000,20751,21666,11890,14322,14991,28004];
const yValues2 = [20000, 15000, 27860, 10000, 16000, 11000, 18000, 19000, 29500, 26000, 30000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "#3B71FE",
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 10000, max:30000}}],
    }
  }
});

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0.4,
      backgroundColor: "#3B71FE",
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues,
    },
    {
      fill: true,
      lineTension: 0.4,
      backgroundColor: "blue",
      borderColor: "rgba(255,87,51,0.5)",
      data: yValues2,
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          min: 10000,
          max: 30000,
          fontColor: "#fff"
        },
        gridLines: {
          display: false,
          // zeroLineColor: "#fff",
          // color: "#fff"
        }
      }],
      xAxes: [{
        ticks:{
          fontColor: "#fff"
        },
        gridLines: {
          display: false,
        }
      }]
    }
  }
});
