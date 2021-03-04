function calculateMwitt() {
  var femaleBreed = document.getElementById("breed").value;
  var femaleBase = document.getElementById("base").value;
  var femaleSecondary = document.getElementById("secondary").value;
  var femaleTertiary = document.getElementById("tertiary").value;
  var femaleMarkings = [];
  var femaleMarkingColors = [];
  var femaleMarkingOpacities = [];

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + femaleBreed));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("" + femaleBase));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("" + femaleSecondary));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("" + femaleTertiary));

}
