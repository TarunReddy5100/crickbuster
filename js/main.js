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