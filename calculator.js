function Mweor(breed, base, second, tert, con) {
  this.breed = document.getElementById(breed).value;
  this.base = document.getElementById(base).value;
  this.second = document.getElementById(second).value;
  this.tert = document.getElementById(tert).value;
  var markings = getMarkings(con);
  var markingColors = getMarkingColors(con);
  var markingOpacities = getMarkingOpacities(con);
}

function calculateMwitt() {
  var femaleMweor = new Mweor("breed","base","secondary","tertiary","containerf");
  var maleMweor = new Mweor("breedm","basem","secondarym","tertiarym","containerm");

  var container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + femaleMweor.breed));
  container.appendChild(document.createElement("br"));
}

function getMarkings(con) {
  var markings = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("select");

  if(inputs[0] != "undefined") {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("marking")) {
        markings.push(inputs[index].value);
      }
    }
  }
  return markings;
}

function getMarkingOpacities(con) {
  var opacities = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("select");

  if(inputs[0] != "undefined") {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("opacity")) {
        opacities.push(inputs[index].value);
      }
    }
  }
  return opacities;
}

function getMarkingColors(con) {
  var colors = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("input");

  if(inputs[0] != "undefined") {
    for (index = 0; index < inputs.length; ++index) {
      colors.push(inputs[index].value);
    }
  }
}
