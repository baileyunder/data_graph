// JavaScript Document
var matrix =
  [
    ["Physics", 57, 68, 64, 44, 86, 50, 60],//Physics
    ["History", 62, 58, 61, 12, 11, 40, 43],//History
    ["Chemistry", 68, 64, 62, 28, 38, 56, 86],//Chemistry
    ["Computer", 66, 70, 73, 37, 27, 41, 36],//Computer
    ["Geology", 82, 71, 77, 48, 58, 99, 12],//Geology
    ["Biology", 73, 81, 78, 46, 58, 14, 15],//Biology
    ["Physiology", 54, 55, 42, 17, 20, 22, 36],//Physiology
    ["Astronomy", 86, 79, 78, 10, 14, 12, 56],//Astronomy
    ["Anthropology", 80, 85, 84, 16, 78, 86, 1], //Anthropology
    ["Sociology", 36, 41, 33, 25, 19, 10, 12],//Sociology
  ];

var means = [];

//Finds mean of each subject in the matrix and returns it to the function.
  for (let i = 0; i < matrix.length; i++) {
    var sum = 0;
    var meanof = 0;
    for (let j = 1; j < matrix[i].length; j++) {
      sum += matrix[i][j];
      meanof = sum / (matrix[i].length - 1);
    }
  means.push(meanof);
}


var barColors = ['blue', 'yellow', 'purple', 'red', 'green', 'violet', 'black', 'orange', 'indigo', 'pink'];

var subjects = ['Physics', 'History', 'Chemistry', 'Computer', 'Geology', 'Biology', 'Physiology', 'Astronomy', 'Anthropology', 'Sociology'];

var graphIsShown = false;

//Graphing Code (Chart.js)
function graph() {
  if (graphIsShown === false) {
    Chart.defaults.global.legend.display = false;
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: subjects,
        datasets: [{
          data: means,
          backgroundColor: barColors,
        }]
      },
      // Configuration options go here
      options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });
    graphIsShown = true;
  }

  document.getElementById('sortAsc').addEventListener('click', function sortDesc() {
    means.sort(function (a, b) { return a - b });
    subjects.splice(0, subjects.length, 'Sociology', 'Physiology', 'History', 'Astronomy', 'Computer', 'Biology', 'Chemistry', 'Physics', 'Anthropology', 'Geology');
    barColors.splice(0, barColors.length, 'pink', 'black', 'yellow', 'orange', 'red', 'violet', 'purple', 'blue', 'indigo', 'green');
    chart.update();
  });

  document.getElementById('sortDesc').addEventListener('click', function sortAsc() {
    means.sort(function (a, b) { return b - a });
    subjects.splice(0, subjects.length, 'Geology', 'Anthropology', 'Physics', 'Chemistry', 'Biology', 'Computer', 'Astronomy', 'History', 'Physiology', 'Sociology');
    barColors.splice(0, barColors.length, 'green', 'indigo', 'blue', 'purple', 'violet', 'red', 'orange', 'yellow', 'black', 'pink');
    chart.update();
  });
}

function reset() {
  subjects.splice(0, subjects.length, 'Physics', 'History', 'Chemistry', 'Computer', 'Geology', 'Biology', 'Physiology', 'Astronomy', 'Anthropology', 'Sociology');
  barColors.splice(0, barColors.length, 'blue', 'yellow', 'purple', 'red', 'green', 'violet', 'black', 'orange', 'indigo', 'pink');
  window.location.reload();
}