let weatherConditions = new XMLHttpRequest();
let weatherResult;

//Pour les activités à Vannes
function getWeatherBreizh() {
  let cityName = "Vannes";
  weatherConditions.open(
    "GET",
    `//api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`,
    true
  );
  weatherConditions.responseType = "text";
  weatherConditions.send(null);

  weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
      weatherResult = JSON.parse(weatherConditions.responseText);
      
      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `${weatherResult.name}<img src="http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png"/><br>Température: ${weatherResult.main.temp}&deg;<br>Description: ${weatherResult.weather[0].description}<br>Ciel couvert à ${weatherResult.clouds.all} %<br>Humidité à ${weatherResult.main.humidity} %<hr/>`;

      let resultActi = document.getElementById("resultActi");
      
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
        resultActi.innerHTML =
          "Attention il fait froid, jouez au scrabble près d'un radiateur.";
        $.getScript("loadActivitiesInt.js");
      } else {
        resultActi.innerHTML =
          "Il fait bon, sortez respirer le bon air, vous vivrez plus longtemps.";
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
      }

      let buttonrefresh = document.getElementById("buttonRefresh");
      buttonRefresh.innerHTML =
        "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
    } else {
      alert(
        "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
      );
    }
  };
  
}

//Pour les activités à Marseille
function getWeatherMarseille() {
  let cityName = "Marseille";
  weatherConditions.open(
    "GET",
    `//api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`,
    true
  );
  weatherConditions.responseType = "text";
  weatherConditions.send(null);

  weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
      weatherResult = JSON.parse(weatherConditions.responseText);

      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `${weatherResult.name}<img src="http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png"/><br>Température: ${weatherResult.main.temp}&deg;<br>Description: ${weatherResult.weather[0].description}<br>Ciel couvert à ${weatherResult.clouds.all}%<hr/>`;

      let resultActi = document.getElementById("resultActi");
      document.getElementById('activitiesList').innerHTML = ""
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
        resultActi.innerHTML =
          "Attention il fait froid, jouez au scrabble près d'un radiateur.";
          $.getScript("loadActivitiesInt.js");
      } else {
        resultActi.innerHTML =
          "Il fait bon, sortez respirer le bon air, vous vivrez plus longtemps.";
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
      }

      let buttonrefresh = document.getElementById("buttonRefresh");
      buttonRefresh.innerHTML =
        "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
    } else {
      alert(
        "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
      );
    }
  };
}
//Pour les activités à Calais
function getWeatherCalais() {
  let cityName = "Calais";
  weatherConditions.open(
    "GET",
    `//api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`,
    true
  );
  weatherConditions.responseType = "text";
  weatherConditions.send(null);

  weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
      weatherResult = JSON.parse(weatherConditions.responseText);

      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `${weatherResult.name}<img src="http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png"/><br>Température: ${weatherResult.main.temp}&deg;<br>Description: ${weatherResult.weather[0].description}<br>Ciel couvert à ${weatherResult.clouds.all}%<hr/>`;

      let resultActi = document.getElementById("resultActi");
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
        resultActi.innerHTML =
          "Attention il fait froid, jouez au scrabble près d'un radiateur.";
          $.getScript("loadActivitiesInt.js");
      } else {
        resultActi.innerHTML =
          "Il fait bon, sortez respirer le bon air, vous vivrez plus longtemps.";
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
          
      }

      let buttonrefresh = document.getElementById("buttonRefresh");
      buttonRefresh.innerHTML =
        "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
    } else {
      alert(
        "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
      );
    }
  };
}

//   function getWeatherData() {
//     let cityName = document.getElementById("city-name").value;
//     let countryCode = document.getElementById("country-code").value;

//     weatherConditions.open(
//       "GET",
//       `//api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&lang=fr&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`,
//       true
//     );
//     weatherConditions.responseType = "text";
//     weatherConditions.send(null);

//     weatherConditions.onload = function () {
//       if (weatherConditions.status === 200) {
//         weatherResult = JSON.parse(weatherConditions.responseText);

//         // console.log(weatherResult);

//         let resultDiv = document.getElementById("resultDiv");
//         resultDiv.innerHTML = `${weatherResult.name}<img src="http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png"/><br>Température: ${weatherResult.main.temp}&deg;<br>Description: ${weatherResult.weather[0].description}<br>Ciel couvert à ${weatherResult.clouds.all}%<hr/>`;

//         let resultActi = document.getElementById("resultActi");
//         if (weatherResult.main.temp < 12) {
//           resultActi.innerHTML =
//             "Attention il fait froid, jouez au scrabble près d'un radiateur.";
//         } else {
//           resultActi.innerHTML =
//             "Il fait bon, sortez respirer le bon air, vous vivrez plus longtemps.";
//         }

//         let buttonrefresh = document.getElementById("buttonRefresh");
//         buttonRefresh.innerHTML =
//           "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
//       } else {
//         alert(
//           "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
//         );
//       }
//     };
//   }
