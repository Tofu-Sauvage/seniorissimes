function compass(deg) {
  if (deg > 11.25 && deg <= 33.75) {
    return "Nord NE";
  } else if (deg > 33.75 && deg <= 56.25) {
    return "Nord Est";
  } else if (deg > 56.25 && deg <= 78.75) {
    return "Est NE";
  } else if (deg > 78.75 && deg <= 101.25) {
    return "Est";
  } else if (deg > 101.25 && deg <= 123.75) {
    return "Est SE";
  } else if (deg > 123.75 && deg <= 146.25) {
    return "Sud Est";
  } else if (deg > 146.25 && deg <= 168.75) {
    return "Sud SE";
  } else if (deg > 168.75 && deg <= 191.25) {
    return "Sud";
  } else if (deg > 191.25 && deg <= 213.75) {
    return "Sud SO";
  } else if (deg > 213.75 && deg <= 236.25) {
    return "Sud Ouest";
  } else if (deg > 236.25 && deg <= 258.75) {
    return "Ouest SO";
  } else if (deg > 258.75 && deg <= 281.25) {
    return "Ouest";
  } else if (deg > 281.25 && deg <= 303.75) {
    return "Oest NO";
  } else if (deg > 303.75 && deg <= 326.25) {
    return "Nord Ouest";
  } else if (deg > 326.25 && deg <= 348.75) {
    return "Nord NO";
  } else {
    return "Nord";
  }
}

function formatDate(d) {
  date = new Date(d * 1000);
  var hh = date.getHours();
  var mm = date.getMinutes();
  // var ss = date.getSeconds();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  // if(ss<10){ss='0'+ss};
  return (d = hh + "h" + mm);
}

function displayTitles() {
  let weatherTitle = "La météo du jour";
  let h2Weather = document.getElementById("dayWeatherTitle");

  let activitiesTitle = "Aujourd'hui votre club vous propose...";
  let h2Activities = document.getElementById("dayActivitiesTitle");

  h2Activities.innerHTML = activitiesTitle;
  h2Weather.innerHTML = weatherTitle;
}

