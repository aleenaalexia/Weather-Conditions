
// Display of users most recent chosen city
var currentCity = document.getElementById('city');
// Search Bar input
var searchBarInput = document.getElementById('userCity');
var searchBtnEl = document.getElementById('searchBtn');

// allows function availability after document is loaded
$(document).ready(function () { 

   // Read user input
   $('#searchBtn').click(function () {
       // saves user input 
       var c = document.getElementById("userCity");
       var cityChoice = c.value;
       console.log(cityChoice);
       window.localStorage.setItem("cityChoice", cityChoice);

       // Updates city list
       var mainCity = document.getElementById('city');
       mainCity.innerHTML = cityChoice;

       // Weather API URL
var apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChoice + "&appid=e77739f38aa571949ec7bee94d448dbd";

   fetch(apiWeatherURL)
   .then(function (response) {
   //    console.log(response);
   //    if (response.status === 200) {
   //       response.json().then(function (data) {
   //          console.log(data)
   //    });

   // }
      });
         });
            });