let requestURL = "clubs.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  //Création d'une variable contenant TOUT les résultats
  let clubs = request.response;

  //Création des variables avant injection des données JSON
  let clubSudName = document.getElementById("club-sud-name");
  let clubSudOwner = document.getElementById("club-sud-owner");
  let clubSudAdress = document.getElementById("club-sud-adress");
  let clubSudPhone = document.getElementById("club-sud-phone");

  let clubNordName = document.getElementById("club-nord-name");
  let clubNordOwner = document.getElementById("club-nord-owner");
  let clubNordAdress = document.getElementById("club-nord-adress");
  let clubNorddPhone = document.getElementById("club-nord-phone");

  let clubBreizhName = document.getElementById("club-breizh-name");
  let clubBreizhOwner = document.getElementById("club-breizh-owner");
  let clubBreizhAdress = document.getElementById("club-breizh-adress");
  let clubBreizhPhone = document.getElementById("club-breizh-phone");


  //Affichage des infos depuis le fichier JSON
  clubSudName.innerHTML = clubs.clubs[0].name;
  clubSudOwner.innerHTML = clubs.clubs[0].owner;
  clubSudAdress.innerHTML = clubs.clubs[0].adress;
  clubSudPhone.innerHTML = clubs.clubs[0].phone;

  clubNordName.innerHTML = clubs.clubs[2].name;
  clubNordOwner.innerHTML = clubs.clubs[2].owner;
  clubNordAdress.innerHTML = clubs.clubs[2].adress;
  clubNorddPhone.innerHTML = clubs.clubs[2].phone;

  clubBreizhName.innerHTML = clubs.clubs[1].name;
  clubBreizhOwner.innerHTML = clubs.clubs[1].owner;
  clubBreizhAdress.innerHTML = clubs.clubs[1].adress;
  clubBreizhPhone.innerHTML = clubs.clubs[1].phone;

  //Affichage des images depuis le fichier JSON
  let clubSudImg = document.createElement("img");
  clubSudImg.src = clubs.clubs[0].image;
  clubSudImg.className = "card-img-top";
  document.getElementById("club-sud-img").appendChild(clubSudImg);

  let clubNordImg = document.createElement("img");
  clubNordImg.src = clubs.clubs[2].image;
  clubNordImg.className = "card-img-top";
  document.getElementById("club-nord-img").appendChild(clubNordImg);

  let clubBreizhImg = document.createElement("img");
  clubBreizhImg.src = clubs.clubs[1].image;
  clubBreizhImg.className = "card-img-top";
  document.getElementById("club-breizh-img").appendChild(clubBreizhImg);
};
