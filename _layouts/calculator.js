function calculateMwitt() {
  var femaleBreed = document.getElementById(breed).options[breed.selectedIndex].value;
  var femaleBase = document.getElementById(base).value;
  var femaleSecondary = document.getElementById(secondary).value;
  var femaleTertiary = document.getElementById(tertiary).value;
  var femaleMarkings = [];
  var femaleMarkingColors = [];
  var femaleMarkingOpacities = [];

  var container = document.getElementById('containerf');
  var inputs = container.getElementsByTagName('select');
  for (var index = 0; index < inputs.length; ++index) {
    if(inputs[index].name.includes("marking")) {
      femaleMarkings.push(inputs[index].options[inputs[index].selectedIndex].value);
    } else { femaleMarkingOpacities.push(inputs[index].options[inputs[index].selectedIndex].value); }
  }

  inputs = container.getElementsByTagName('input');
  for (index = 0; index < inputs.length; ++index) {
    femaleMarkingColors.push(inputs[index].value);
  }

  var maleBreed = document.getElementById(breedm).options[breedm.selectedIndex].value;
  var maleBase = document.getElementById(basem).value;
  var maleSecondary = document.getElementById(secondarym).value;
  var maleTertiary = document.getElementById(tertiarym).value;
  var maleMarkings = [];
  var maleMarkingColors = [];
  var maleMarkingOpacities = [];

  container = document.getElementById('containerm');
  var inputs = container.getElementsByTagName('select');
  for (index = 0; index < inputs.length; ++index) {
    if(inputs[index].name.includes("marking")) {
      maleMarkings.push(inputs[index].options[inputs[index].selectedIndex].value);
    } else { maleMarkingOpacities.push(inputs[index].options[inputs[index].selectedIndex].value); }
  }

  inputs = container.getElementsByTagName('input');
  for (index = 0; index < inputs.length; ++index) {
    maleMarkingColors.push(inputs[index].value);
  }

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode(femaleBreed));
  container.appendChild(document.createElement("br"));
}
