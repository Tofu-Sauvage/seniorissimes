let requestURL = "clubs.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  let clubs = request.response;

  let clubSudImg = document.getElementById("club-sud-img");
  let clubSudName = document.getElementById("club-sud-name");
  let clubSudOwner= document.getElementById("club-sud-owner");
  let clubSudAdress= document.getElementById("club-sud-adress");


  let clubNordImg = document.getElementById("club-nord-img");
  let clubNordName = document.getElementById("club-nord-name");
  let clubNordOwner = document.getElementById("club-nord-owner");
  let clubNordAdress= document.getElementById("club-nord-adress");


  let clubBreizhImg = document.getElementById("club-breizh-img");
  let clubBreizhName = document.getElementById("club-breizh-name");
  let clubBreizhOwner = document.getElementById("club-breizh-owner");
  let clubBreizhAdress= document.getElementById("club-breizh-adress");


  clubSudName.innerHTML = clubs.clubs[0].name;
  clubSudOwner.innerHTML = clubs.clubs[0].owner;
  clubSudAdress.innerHTML = clubs.clubs[0].adress;

  clubNordName.innerHTML = clubs.clubs[1].name;
  clubNordOwner.innerHTML = clubs.clubs[1].owner;
  clubNordAdress.innerHTML = clubs.clubs[1].adress;

  clubBreizhName.innerHTML = clubs.clubs[2].name;
  clubBreizhOwner.innerHTML = clubs.clubs[2].owner;
  clubBreizhAdress.innerHTML = clubs.clubs[2].adress;

};
