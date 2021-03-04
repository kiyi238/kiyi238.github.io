function Mweor(breed, base, second, tert, eye, con) {
  this.breed = document.getElementById(breed).value;
  this.base = document.getElementById(base).value;
  this.second = document.getElementById(second).value;
  this.tert = document.getElementById(tert).value;
  this.eye = document.getElementById(eye).value;
  var markings = getMarkings(con);
  var markingColors = getMarkingColors(con);
  var markingOpacities = getMarkingOpacities(con);
}

function calculateMwitt() {
  var femaleMweor = new Mweor("breed","base","secondary","tertiary","eye","containerf");
  var maleMweor = new Mweor("breedm","basem","secondarym","tertiarym","eyem","containerm");

  console.log(blendColors('00FF66', '443456', 0.5));
}

function calculateBreed(f, m) {
  var breed;
  var rand = Math.random();
  //Canceling and hybrid breed combos.
  //Air combos.



  else if (rand < 0.5) {
    breed = f.breed;
  } else { breed = m.breed; }
  return breed;
}

function calculateBase(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.base;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.base;
  } else {
    color = blendColors(f.base, m.base, 0.5);
  }
  return color;
}

function calculateSecondary(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.second;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.second;
  } else {
    color = blendColors(f.second, m.second, 0.5);
  }
  return color;
}

function calculateTertiary(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.tert;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.tert;
  } else {
    color = blendColors(f.tert, m.tert, 0.5);
  }
  return color;
}

function calculateEye(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.eye;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.eye;
  } else {
    color = blendColors(f.eye, m.eye, 0.5);
  }
  return color;
}

function calculateMarkings(f, m) {}

function blendColors(colorA, colorB, amount) {
  var [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  var [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  var r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  var g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  var b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
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
