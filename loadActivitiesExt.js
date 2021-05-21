// le nom des variables des requètes différent pour ne pas entrer en conflit avec le reste du script en amont

// variables déja introduite au début de chaque fonctions de activities.js
 requestJsonURLExt = "activities.json";
 requestJsonExt = new XMLHttpRequest();

  requestJsonExt.open("GET", requestJsonURLExt);
  requestJsonExt.responseType = "json";
  requestJsonExt.send();

  requestJsonExt.onload = function () {
    let activities = requestJsonExt.response;
    let activitiesExt = activities["ext-activities"];
    let html = "";

    let warningHot = "";
    if (weatherResult.main.temp > 30) 
      warningHot = "<strong>Pensez à prendre une bouteille d'eau : il fait chaud !</strong><br>";

    activitiesExt.forEach(element => {
      html += `<div class="col-lg-6 col-md-6 col-sm-12 mb-4">`
      html += ` <div class="card">`;
      html += `  <img src="${element.img}" class="card-img-top" alt="...">`;
      html += `  <div class="card-body">`;
      html += `    <h5 class="card-title">${element.name}</h5>`;
      html += `    <p class="card-text">${warningHot}${element.description}</p>`;
      html += `    <a role="button" class="btn btn-custom btn-sm" href="#includedFormContact">En savoir plus</a>`;
      html += `  </div>`;
      html += ` </div>`
      html += `</div>`
    });

    document.getElementById('activitiesList').innerHTML = html;
    console.log(html);
  }