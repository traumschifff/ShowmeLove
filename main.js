document.getElementById("background_wrap").style.backgroundPosition = getRndInteger(1,100).toString() + "% " + getRndInteger(1,100).toString() + "%";
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }