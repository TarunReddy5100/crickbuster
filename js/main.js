const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});


const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});

/* tabs JS */
function openhotel(evt, hotelName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("hoteltab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("hotel-tab-inactive");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" hotel-tab-active", "");
    }
    document.getElementById(hotelName).style.display = "block";
    evt.currentTarget.className += " hotel-tab-active";
}
/* tabs JS */

/* Business Table JS */
function bussinessclass() {
    var x = document.getElementById("businesstable");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  /* Business Table JS */

  /* Add pakages JS */
  function showContent(tabName) {
    var i;
    var upperContents = document.querySelectorAll('#upper-matches, #upper-hotels, #upper-flights, #upper-attractions, #upper-intraintercity, #upper-itinerary');
    var bottomContents = document.querySelectorAll('#bottom-matches, #bottom-hotels, #bottom-flights, #bottom-attractions, #bottom-intraintercity, #bottom-itinerary');
    //  var upperContents = document.querySelectorAll('#upper-content, #upper-about, #upper-services, #upper-contact');
    // var bottomContents = document.querySelectorAll('#bottom-content, #bottom-about, #bottom-services, #bottom-contact');
    var tabs = document.querySelectorAll('.tab-link');

    for (i = 0; i < upperContents.length; i++) {
        upperContents[i].classList.remove('active');
    }

    for (i = 0; i < bottomContents.length; i++) {
        bottomContents[i].classList.remove('active');
    }

    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.getElementById('upper-' + tabName).classList.add('active');
    document.getElementById('bottom-' + tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
/* Add pakages JS */
// Start  Package on Live script

        const createChart = (elementId, percentage, color) => {
            const ctx = document.getElementById(elementId).getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [percentage, 100 - percentage],
                        backgroundColor: [color, '#e6e6e6'],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '80%',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            enabled: false
                        },
                        legend: {
                            display: false
                        },
                        doughnutLabel: {
                            labels: [
                                {
                                    text: `${percentage}%`,
                                    font: {
                                        size: '20'
                                    },
                                    color: '#333'
                                }
                            ]
                        }
                    }
                }
            });
        };

        createChart('t20Cricket', 64, '#742CDF');
        createChart('iplpackage', 74, '#00BDFF');
        createChart('testcricket', 80, '#FF2E37');
        createChart('tournament', 88, '#51DF59');
        createChart('t20cricket1', 64, '#FFC107');
        createChart('t20cricket2', 20, '#17A2B8');
        
//End Package on live script
    
// Start Sales Statistics
        const allTimeData = {
            labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Direct booking',
                data: [300, 400, 350, 450, 500, 550, 400, 450, 400],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Package',
                data: [400, 300, 450, 350, 300, 250, 400, 350, 400],
                borderColor: 'magenta',
                backgroundColor: 'rgba(255, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }]
        };

        const thisYearData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Direct booking',
                data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Package',
                data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                borderColor: 'magenta',
                backgroundColor: 'rgba(255, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }]
        };

        const thisWeekData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Direct booking',
                data: [20, 25, 30, 35, 40, 45, 50],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Package',
                data: [15, 20, 25, 30, 35, 40, 45],
                borderColor: 'magenta',
                backgroundColor: 'rgba(255, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }]
        };

        const todayData = {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Direct booking',
                data: [5, 10, 15, 20, 25, 30],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Package',
                data: [3, 8, 13, 18, 23, 28],
                borderColor: 'magenta',
                backgroundColor: 'rgba(255, 0, 255, 0.3)',
                fill: true,
                tension: 0.4
            }]
        };

        const config = {
            type: 'line',
            data: allTimeData,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        const myChart = new Chart(document.getElementById('myChart'), config);

        function showChart(timeFrame) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelector(`.tab[onclick="showChart('${timeFrame}')"]`).classList.add('active');

            switch (timeFrame) {
                case 'thisYear':
                    myChart.data = thisYearData;
                    break;
                case 'thisWeek':
                    myChart.data = thisWeekData;
                    break;
                case 'today':
                    myChart.data = todayData;
                    break;
                default:
                    myChart.data = allTimeData;
                    break;
            }
            myChart.update();
        }
   
// End Sales Statistics



