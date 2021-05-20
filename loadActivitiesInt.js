// le nom des variables des requètes différent pour ne pas entrer en conflit avec le reste du script en amont

let requestJsonURLInt = "activities.json";
let requestJsonInt = new XMLHttpRequest();

  requestJsonInt.open("GET", requestJsonURLInt);
  requestJsonInt.responseType = "json";
  requestJsonInt.send();

  requestJsonInt.onload = function () {
    let activities = requestJsonInt.response;
    let activitiesInt = activities["int-activities"];
    let html = "";

    activitiesInt.forEach(element => {
      html += `<div class="col-lg-4 col-md-4 col-sm-12 mb-4">`
      html += ` <div class="card" style="width: 18rem;">`;
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