// Traffic Section Buttons ===================================>
const trafficTimeframes = document.querySelector('.timeframes');

// Functions
const setChartData = (chart,data) => {
  chart.data.datasets[0].data = data;
}

trafficTimeframes.addEventListener('click', (e) => {

  if (e.target.id === 'hourly') {
    setChartData(trafficChart,hourlyTraffic);
  } else if (e.target.id === 'daily') {
    setChartData(trafficChart,dailyTraffic);
  } else if (e.target.id === 'weekly') {
    setChartData(trafficChart,weeklyTraffic);
  } else if (e.target.id === 'monthly') {
    setChartData(trafficChart,monthlyTraffic);
  }
    trafficChart.update();

});

// Alerts =====================================================>
const trafficHeading = document.querySelector('.dashboard__traffic h3');
const alert = document.createElement('P');
const closeButton = document.querySelector('.close');

const alertPopUp = () => {
  trafficHeading.parentNode.insertBefore(alert, trafficHeading);
}

alert.className = 'alert';
alert.innerHTML = '<strong>Alert</strong> You have several new notifications!<div class="close"></div>';

document.addEventListener('DOMContentLoaded', () => {
  alertPopUp();
});

alert.addEventListener('click', (e) => {

  if (e.target.className === 'close') {
    alert.style.animation = 'slideUp .5s forwards';
    setTimeout(() => {
      alert.parentNode.removeChild(alert);
    }, 500);
  }

});
