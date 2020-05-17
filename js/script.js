var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    lineTension : 0,
    borderColor: '#5dd2d6',
    data: {
        labels: [
          '16-22', '23-29',
          '30-5', '6-12',
          '13-19', '20-26',
          '27-3', '4-10',
          '11-17', '18-24'],
        datasets: [{
            label: 'Weekly',
            data: [
              1000, 1500,
              1250, 1750,
              2000, 1500,
              1500, 1000,
              1750, 2250],
            backgroundColor: 'rgba(67, 139, 129, 0.2)',
            borderColor: '#5dd2d6',
            pointRadius: 4.5,
            pointBackgroundColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
