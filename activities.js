let weatherConditions = new XMLHttpRequest();
let weatherResult;

//Pour les activités à Vannes
function getWeatherBreizh() {
  // RESET quand liste d'activités déja généré
  let requestJsonURLInt = null;
  let requestJsonInt = null;
  let requestJsonURLExt = null;
  let requestJsonExt = null;

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

      // call functions.js
      let HourWeatherSunrise = formatDate(weatherResult.sys.sunrise) ;
      let HourWeatherSunset = formatDate(weatherResult.sys.sunset) ;
      let windDirection = compass(weatherResult.wind.deg);
            
      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `
      <div class="card">
        <div class="row no-gutters border rounded">
          <div class="col-md-3 d-flex justify-content-center align-items-center icon-weather">
            <img src="http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@4x.png"/>
          </div>
          <div class="col-md-9">
            <div class="card-body pb-0">
                <h2 class="card-title mb-0">${weatherResult.name}</h2>
            </div>
            <div class="col-md-12 pl-0">
              <div class="row">
                <div class="col-md-4">
                  <div class="card-body">
                  <p class="card-text capitalize">Description: <strong>${weatherResult.weather[0].description}</strong></p>
                  <p class="card-text mb-auto">Température: ${Math.round(weatherResult.main.temp)}&deg;C</p>
                    <p class="card-text mb-auto">Ciel couvert à ${weatherResult.clouds.all} %</p>
                    <p class="card-text">Humidité à ${weatherResult.main.humidity} %</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card-body">
                    <p class="card-text mb-auto">Maximum : ${Math.round(weatherResult.main.temp_max)}&deg;C</p>
                    <p class="card-text">Maximum : ${Math.round(weatherResult.main.temp_min)}&deg;C</p>
                    <p class="card-text mb-auto">Lever du soleil : ${HourWeatherSunrise}</p>
                    <p class="card-text">Coucher du soleil : ${HourWeatherSunset}</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card-body">
                    <p class="card-text mb-auto">Vent : ${Math.round(weatherResult.wind.speed)} m/s</p>
                    <p class="card-text">Direction : ${windDirection}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      let resultActi = document.getElementById("resultActi");
      document.getElementById('activitiesList').innerHTML = ""
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
        $.getScript("loadActivitiesInt.js");
      } else {
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
      }

      // let buttonrefresh = document.getElementById("buttonRefresh");
      // buttonRefresh.innerHTML =
      //   "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
    } else {
      alert(
        "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
      );
    }
  };
  
}

//Pour les activités à Marseille
function getWeatherMarseille() {
  // RESET quand liste d'activités déja généré
  let requestJsonURLInt = null;
  let requestJsonInt = null;
  let requestJsonURLExt = null;
  let requestJsonExt = null;

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

      // call functions.js
      let HourWeatherSunrise = formatDate(weatherResult.sys.sunrise) ;
      let HourWeatherSunset = formatDate(weatherResult.sys.sunset) ;
      let windDirection = compass(weatherResult.wind.deg);
            
      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `
      <div class="card">
        <div class="row no-gutters border rounded">
          <div class="col-md-3 d-flex justify-content-center align-items-center icon-weather">
            <img src="http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@4x.png"/>
          </div>
          <div class="col-md-9">
            <div class="card-body pb-0">
                <h2 class="card-title mb-0">${weatherResult.name}</h2>
            </div>
            <div class="col-md-12 pl-0">
              <div class="row">
                <div class="col-md-4">
                  <div class="card-body">
                  <p class="card-text capitalize">Description: <strong>${weatherResult.weather[0].description}</strong></p>
                  <p class="card-text mb-auto">Température: ${Math.round(weatherResult.main.temp)}&deg;C</p>
                  <p class="card-text mb-auto">Ciel couvert à ${weatherResult.clouds.all} %</p>
                  <p class="card-text">Humidité à ${weatherResult.main.humidity} %</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card-body">
                  <p class="card-text mb-auto">Maximum : ${Math.round(weatherResult.main.temp_max)}&deg;C</p>
                  <p class="card-text">Maximum : ${Math.round(weatherResult.main.temp_min)}&deg;C</p>
                  <p class="card-text mb-auto">Lever du soleil : ${HourWeatherSunrise}</p>
                  <p class="card-text">Coucher du soleil : ${HourWeatherSunset}</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card-body">
                  <p class="card-text mb-auto">Vent : ${Math.round(weatherResult.wind.speed)} m/s</p>
                    <p class="card-text">Direction : ${windDirection}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      let resultActi = document.getElementById("resultActi");
      document.getElementById('activitiesList').innerHTML = ""
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
          $.getScript("loadActivitiesInt.js");
      } else {
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
      }

      // let buttonrefresh = document.getElementById("buttonRefresh");
      // buttonRefresh.innerHTML =
      //   "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
    } else {
      alert(
        "Il semble que les informations envoyées sont incorrectes, merci de vérifier et de renvoyer le formulaire."
      );
    }
  };
}
//Pour les activités à Calais
function getWeatherCalais() {
  // RESET quand liste d'activités déja généré
  let requestJsonURLInt = null;
  let requestJsonInt = null;
  let requestJsonURLExt = null;
  let requestJsonExt = null;

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

      // call functions.js
      let HourWeatherSunrise = formatDate(weatherResult.sys.sunrise) ;
      let HourWeatherSunset = formatDate(weatherResult.sys.sunset) ;
      let windDirection = compass(weatherResult.wind.deg);
            
      let resultDiv = document.getElementById("resultDiv");
      resultDiv.innerHTML = `
      <div class="card">
        <div class="row no-gutters border rounded">
          <div class="col-md-3 d-flex justify-content-center align-items-center icon-weather">
            <img src="http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@4x.png"/>
          </div>
          <div class="col-md-9">
            <div class="card-body pb-0">
                <h2 class="card-title mb-0">${weatherResult.name}</h2>
            </div>
            <div class="col-md-12 pl-0">
              <div class="row">
                <div class="col-md-4">
                  <div class="card-body">
                  <p class="card-text capitalize">Description: <strong>${weatherResult.weather[0].description}</strong></p>
                  <p class="card-text mb-auto">Température: ${Math.round(weatherResult.main.temp)}&deg;C</p>
                  <p class="card-text mb-auto">Ciel couvert à ${weatherResult.clouds.all} %</p>
                  <p class="card-text">Humidité à ${weatherResult.main.humidity} %</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card-body">
                  <p class="card-text mb-auto">Maximum : ${Math.round(weatherResult.main.temp_max)}&deg;C</p>
                  <p class="card-text">Maximum : ${Math.round(weatherResult.main.temp_min)}&deg;C</p>
                  <p class="card-text mb-auto">Lever du soleil : ${HourWeatherSunrise}</p>
                  <p class="card-text">Coucher du soleil : ${HourWeatherSunset}</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card-body">
                  <p class="card-text mb-auto">Vent : ${Math.round(weatherResult.wind.speed)} m/s</p>
                    <p class="card-text">Direction : ${windDirection}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      let resultActi = document.getElementById("resultActi");
      document.getElementById('activitiesList').innerHTML = ""
      if (weatherResult.main.temp < 12 || weatherResult.main.humidity >= 70) {
          $.getScript("loadActivitiesInt.js");
      } else {
          $.getScript("loadActivitiesExt.js");
          $.getScript("loadActivitiesInt.js");
          
      }

      // let buttonrefresh = document.getElementById("buttonRefresh");
      // buttonRefresh.innerHTML =
      //   "<button type='button' class='btn btn-primary mb-4' onClick='window.location.reload()'>Recommencer</button>";
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
