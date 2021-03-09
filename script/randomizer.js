function randomize() {
  var basics = calculateRandomBasics();
  var markings = calculateRandomMarkings();
  var mw = new Mweor(basics[0],basics[1],basics[2],basics[3],basics[4],markings[0],[],markings[1],markings[2]);
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
  var markingElements = [];
  var colorElements = [];
  var opacityElements = [];
  var mutcheck = document.getElementById("mutCheck");
  var container = document.getElementById("containerr");
  var inputsSelect = container.getElementsByTagName("select");
  var inputs = container.getElementsByTagName("input");

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("check")) {
        checks.push(inputs[index]);
      }
      if(inputs[index].name.includes("color")) {
        colorElements.push(inputs[index]);
      }
    }
  }

  if(typeof inputsSelect[0] != 'undefined') {
    for (var index = 0; index < inputsSelect.length; ++index) {
      if(inputsSelect[index].name.includes("marking")) {
        markingElements.push(inputsSelect[index]);
      }
      if(inputsSelect[index].name.includes("opacity")) {
        opacityElements.push(inputsSelect[index]);
      }
    }
  }

  if(typeof markingElements[0] != 'undefined') {
    for (var index = 0; index < markingElements.length; ++index) {
      if(checks[index].checked) {
        markings.push(markingElements[index].value);
        colors.push(colorElements[index].value);
        opacities.push(opacityElements[index].value);
      }
      else {
        var marking;
        if(mutCheck.checked) { marking = markingListNoGrowths[Math.floor(Math.random() * markingListNoGrowths.length)]; }
        else { marking = markingList[Math.floor(Math.random() * markingList.length)]; }
        markings.push(marking);
        markingElements[index].value = marking;

        var color = Math.floor(Math.random()*16777215).toString(16);
        colors.push(color);
        colorElements[index].value = color;

        var opac = opacityList[Math.floor(Math.random() * opacityList.length)];
        opacities.push(opac);
        opacityElements[index].value = opac;
      }
    }
  }
  return [markings, colors, opacities];
}
