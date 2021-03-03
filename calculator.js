function calculateMwitt() {
  var femaleBreed = document.getElementById(breed).options[breed.selectedIndex].value;

  var container = document.getElementById("containert");
  container.appendChild(femaleBreed);
  container.appendChild(document.createElement("br"));
}
