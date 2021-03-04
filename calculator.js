function calculateMwitt() {
  var femaleBreed = document.getElementById("breed");
  var option = femaleBreed.options[femaleBreed.selectedIndex].text;

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + option));
  container.appendChild(document.createElement("br"));
}
