// Traffic Section Buttons ----------------------------------->
const trafficTimeframes = document.querySelector('.timeframes');

// Alert --------------------------------------------->
const trafficHeading = document.querySelector('.dashboard__traffic h3');
const alert = document.createElement('P');

// Notifications --------------------------------------------->
const bell = document.querySelector('.header__icon-bell');
let notifications = document.querySelector('.notifications');

// Settings -------------------------------------------------->
const settingsSection = document.getElementById('dash-settings')
const switchButtons = document.querySelectorAll('.switch');
const switchCircles = document.querySelectorAll('.switch-circle');




// Functions =================================================>

// change chart data
const setChartData = (chart,data) => {
  chart.data.datasets[0].data = data;
}

// alert pop up
const alertPopUp = () => {
  trafficHeading.parentNode.insertBefore(alert, trafficHeading);
}

// add notification
const addNotification = (text) => {
  let ping = document.createElement('LI');
  ping.innerHTML = text;
  notifications.appendChild(ping);
}

// =================================================================================
//                       * LISTENERS *
//==================================================================================

// Chart Data ================================================>
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

// Alert =====================================================>
alert.className = 'alert';
alert.innerHTML = '<strong>Alert</strong> You have several new notifications!<div class="close"></div>';

// on document load
document.addEventListener('DOMContentLoaded', () => {

  // add notifications
  addNotification('You have 12 new viewers today.<div class="close"></div>');
  addNotification('Victoria Chambers added you on facebook.<div class="close"></div>');
  addNotification('Google Plus will be discontinued. <a target="_blank" href="https://support.google.com/plus/answer/9217723?hl=en">Read more...</a><div class="close"></div>');

  // hide notification menu
  notifications.style.display = "none";

  // show alert
  alertPopUp();

});

// close alert
alert.addEventListener('click', (e) => {

  if (e.target.className === 'close') {
    alert.style.animation = 'slideUp .5s forwards';
    setTimeout(() => {
      alert.parentNode.removeChild(alert);
    }, 500);
  }

});

// Notifications =============================================>

// listen to bell click
bell.addEventListener('click', () => {

  // toggle notifications menu view
  if (notifications.style.display === "none") {
  notifications.style.display = "block";
  } else {
    notifications.style.display = "none";
  }

  // if no notifications add message
  if (notifications.childNodes.length < 1) {
    addNotification('You have no new notifications.');
  }
});

// listen to click on 'x' button
notifications.addEventListener('click', (e) => {

  // if 'x' pressed, remove notification
  if (e.target.className === 'close') {
    let noti = e.target.parentNode;
    noti.parentNode.removeChild(noti);
  }

  // if no notifications, hide menu
  if (notifications.childNodes.length < 1) {
    notifications.style.display = 'none';
  }

});

// Settings =============================================>

// listen to settings section
settingsSection.addEventListener('click', (e) => {

  if (e.target.className === 'switch-circle') {
    let button = e.target;
    if (button.previousElementSibling.previousElementSibling.checked === false) {
      button.previousElementSibling.previousElementSibling.checked = true;
      button.parentNode.style.background = '#f3f3f3';
    } else {
      button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.checked = true;
      button.parentNode.style.background = '';
    }
  }

  if (e.target.tagName === 'LABEL') {
    let button = e.target;
    if (button.parentNode.style.background === '') {
      button.parentNode.style.background = '#f3f3f3';
    } else {
      button.parentNode.style.background = '';
    }

  }

});
