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
// Start Stadium form validations
 document.getElementById('addStadiumForm').addEventListener('submit', function (event) {
            let isValid = true;

            // Stadium Name Validation
            const formStadiumNameInput = document.getElementById('formStadiumNameInput');
            const errorFormStadiumNameInput = document.getElementById('errorFormStadiumNameInput');
            if (formStadiumNameInput.value.length < 3 || formStadiumNameInput.value.length > 50) {
                errorFormStadiumNameInput.textContent = 'Stadium name must be between 3 and 50 characters.';
                isValid = false;
            } else {
                errorFormStadiumNameInput.textContent = '';
            }

            // City Validation
            const formStadiumCityInput = document.getElementById('formStadiumCityInput');
            const errorFormStadiumCityInput = document.getElementById('errorFormStadiumCityInput');
            if (formStadiumCityInput.value.length < 2 || formStadiumCityInput.value.length > 50) {
                errorFormStadiumCityInput.textContent = 'City must be between 2 and 50 characters.';
                isValid = false;
            } else {
                errorFormStadiumCityInput.textContent = '';
     }
     // Country Validation
            const formStadiumCountryInput = document.getElementById('formStadiumCountryInput');
            const errorFormStadiumCountryInput = document.getElementById('errorFormStadiumCountryInput');
            if (formStadiumCountryInput.value.length < 2 || formStadiumCountryInput.value.length > 50) {
                errorFormStadiumCountryInput.textContent = 'City must be between 2 and 50 characters.';
                isValid = false;
            } else {
                errorFormStadiumCountryInput.textContent = '';
            }


            // Description Validation
            const formStadiumDescription = document.getElementById('formStadiumDescription');
            const errorFormStadiumDescription = document.getElementById('errorFormStadiumDescription');
            if (formStadiumDescription.value.length < 10 || formStadiumDescription.value.length > 200) {
                errorFormStadiumDescription.textContent = 'Description must be between 10 and 200 characters.';
                isValid = false;
            } else {
                errorFormStadiumDescription.textContent = '';
            }

            // Coordinates Validation
            // const coordinates = document.getElementById('coordinates');
            // const coordinatesError = document.getElementById('coordinates-error');
            // const coordinatesPattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6},\s*-?([1]?[0-7]?[0-9]|[1-9]0)\.{1}\d{1,6}$/;
            // if (!coordinatesPattern.test(coordinates.value)) {
            //     coordinatesError.textContent = 'Coordinates must be in the format: latitude, longitude (e.g., 12.345678, -98.765432).';
            //     isValid = false;
            // } else {
            //     coordinatesError.textContent = '';
            // }

            // Seating Map Validation
            // const seatingMap = document.getElementById('seating-map');
            // const seatingMapError = document.getElementById('seating-map-error');
            // if (seatingMap.files.length === 0) {
            //     seatingMapError.textContent = 'Please upload an image file for the seating map.';
            //     isValid = false;
            // } else {
            //     seatingMapError.textContent = '';
            // }

            if (!isValid) {
                event.preventDefault();
            }
        });
// End Stadium form validations
