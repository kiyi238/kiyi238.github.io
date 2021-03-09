function randomize() {
  var basics = calculateRandomBasics();
  var markings = calculateRandomMarkings();
  var mw = new Mweor(basics[0],basics[1],basics[2],basics[3],markings[0],[],markings[1],markings[2]);
  drawPreview(mw, "randCanvas");
}

function calculateRandomBasics() {
  var basics = [];
  if(document.getElementById("breedCheck").checked) { basics.push(document.getElementById("breedr").value); }
  else {
    var breed = breeds[Math.floor(Math.random() * breeds.length)];
    basics.push(breed);
    document.getElementById("breedr").value = breed;
  }

  if(document.getElementById("baseCheck").checked) { basics.push(document.getElementById("baser").value); }
  else {
    var base = Math.floor(Math.random()*16777215).toString(16);
    basics.push(base);
    document.getElementById("baser").value = base;
  }

  if(document.getElementById("secondaryCheck").checked) { basics.push(document.getElementById("secondaryr").value); }
  else {
    var second = Math.floor(Math.random()*16777215).toString(16);
    basics.push(second);
    document.getElementById("secondaryr").value = second;
  }

  if(document.getElementById("tertiaryCheck").checked) { basics.push(document.getElementById("tertiaryr").value); }
  else {
    var tert = Math.floor(Math.random()*16777215).toString(16);
    basics.push(tert);
    document.getElementById("tertiaryr").value = tert;
  }

  if(document.getElementById("eyeCheck").checked) { basics.push(document.getElementById("eyer").value); }
  else {
    var eye = Math.floor(Math.random()*16777215).toString(16);
    basics.push(eye);
    document.getElementById("eyer").value = eye;
  }

  return basics;
}

function calculateRandomMarkings() {
  var markings = [];
  var colors = [];
  var opacities = [];
  var checks = [];
  var container = document.getElementById("containerr");
  var inputs = container.getElementsByTagName("select");

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("check")) {
        checks.push(inputs[index]);
      }
    }
  }

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("marking")) {
        if(checks[index].checked) { markings.push(inputs[index].value); }
        else {
          var marking = markingList[Math.floor(Math.random() * markingList.length)];
          markings.push(marking);
          input[index].value = marking;
        }
      }
      if(inputs[index].name.includes("color")) {
        if(checks[index].checked) { colors.push(inputs[index].value); }
        else {
          var color = Math.floor(Math.random()*16777215).toString(16);
          colors.push(color);
          inputs[index].value = color;
        }
      }
      if(inputs[index].name.includes("opacity")) {
        if(checks[index].checked) { opacities.push(inputs[index].value); }
        else {
          var opac = opacityList[Math.floor(Math.random() * opacityList.length)];
          opacities.push(opac);
          inputs[index].value = opac;
        }
      }
    }
  }
  return [markings, colors, opacities];
}
