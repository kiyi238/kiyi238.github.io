function calculateMwitt() {
  var femaleMarkings = [];
  var femaleMarkingOpacities = [];

  var container = document.getElementById("containerf");
  var inputs = container.getElementsByTagName("select");
  
  if(inputs[0] != "undefined") {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("marking")) {
        femaleMarkings.push(inputs[index].value);
      } else { femaleMarkingOpacities.push(inputs[index].value); }
    }
  }

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + femaleMarkingOpacities[0]));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("" + femaleMarkings[0]));
  container.appendChild(document.createElement("br"));
}
