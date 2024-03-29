// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var parametro1 = parseInt(ctx.getAttribute("data-parametro1"));
var parametro2 = parseInt(ctx.getAttribute("data-parametro2"));
var parametro3 = parseInt(ctx.getAttribute("data-parametro3"));
var myPieChart = new Chart(ctx,{
  type: 'doughnut',
  data: {
    labels: ["Pendetes", "Finalizandos", "Cancelados"],
    datasets: [{
      data: [parametro1, parametro2, parametro3],
      backgroundColor: ['#f6c23e', '#1cc88a', '#e74a3b'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
