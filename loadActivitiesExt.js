// le nom des variables des requètes différent pour ne pas entrer en conflit avec le reste du script en amont

let requestJsonURLExt = "activities.json";
let requestJsonExt = new XMLHttpRequest();

  requestJsonExt.open("GET", requestJsonURLExt);
  requestJsonExt.responseType = "json";
  requestJsonExt.send();

  requestJsonExt.onload = function () {
    let activities = requestJsonExt.response;
    let activitiesExt = activities["ext-activities"];
    let html = "";

    activitiesExt.forEach(element => {
      html += `<div class="col-lg-6 col-md-6 col-sm-12 mb-4">`
      html += ` <div class="card">`;
      html += `  <img src="${element.img}" class="card-img-top" alt="...">`;
      html += `  <div class="card-body">`;
      html += `    <h5 class="card-title">${element.name}</h5>`;
      html += `    <p class="card-text">${element.description}</p>`;
      html += `  </div>`;
      html += ` </div>`
      html += `</div>`
    });

    document.getElementById('activitiesList').innerHTML += html;
  }