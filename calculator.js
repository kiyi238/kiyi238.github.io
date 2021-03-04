function calculateMwitt() {
  var femaleBreed = document.getElementById("breed").value;

  container = document.getElementById("containert");
  container.appendChild(document.createTextNode("" + femaleBreed));
  container.appendChild(document.createElement("br"));
}
