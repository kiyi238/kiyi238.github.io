function calculateMwitt() {
  var femaleMarkingColors = [];

  var container = document.getElementById("containerf");
  var inputs = container.getElementsByTagName("input");
  for (var index = 0; index < inputs.length; ++index) {
    femaleMarkingColors.push(inputs[index].value);
  }

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + femaleMarkingColors[0]));
  container.appendChild(document.createElement("br"));
}
