let trafficTimeframes = document.querySelector('.timeframes');

trafficTimeframes.addEventListener('click', (e) => {

  if (e.target.id === 'hourly') {
      trafficChart.data.datasets[0].data = hourlyTraffic;
  } else if (e.target.id === 'daily') {
      trafficChart.data.datasets[0].data = dailyTraffic;
  } else if (e.target.id === 'weekly') {
      trafficChart.data.datasets[0].data = weeklyTraffic;
  } else if (e.target.id === 'monthly') {
      trafficChart.data.datasets[0].data = monthlyTraffic;
  }


});
