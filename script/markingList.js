function addFields(num, con){
  var number = document.getElementById(num).value;
  var container = document.getElementById(con);
  var markingElements = container.getElementsByTagName("input");
  var markingCount = 0;
  var count = number;

  for(var n = 0; n < markingElements.length; n++) {
    if(markingElements[n].name.includes("color")) {
      markingCount++;
    }
  }

  while(count < markingCount) {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    count++;
  }

  if(number > markingCount) {
    var add = number - markingCount;
    for (var i = 0; i < add; i++){
      var marking = document.createElement("select");
      marking.type = "select";
      marking.name = "marking" + i;
      for (var j = 0; j < markingList.length; j++) {
        var mark = document.createElement("option");
        mark.value = markingList[j];
        mark.text = markingList[j];
        marking.appendChild(mark);
      }
      container.appendChild(marking);

      if(container.id != "containerr") {
        var gene = document.createElement("select");
        gene.type = "select";
        gene.name = "gene" + i;

        for (var k = 0; k < geneList.length; k++) {
          var g = document.createElement("option");
          g.value = geneList[k];
          g.text = geneList[k];
          gene.appendChild(g);
        }

        container.appendChild(gene);
      }
      container.appendChild(document.createTextNode(" #"));

      var color = document.createElement("input");
      color.type = "text";
      color.name = "color" + i;
      color.maxlength = "6";
      color.size = "6";
      container.appendChild(color);

      var opacity = document.createElement("select");
      opacity.type = "select";
      opacity.name = "opacity" + i;

      for (var n = 0; n < opacityList.length; n++) {
        var opac = document.createElement("option");
        opac.value = opacityList[n];
        opac.text = opacityList[n];
        opacity.appendChild(opac);
      }

      container.appendChild(opacity);
      container.appendChild(document.createTextNode("%"));

      if(container.id == "containerr") {
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.title = "Lock Value";
        checkBox.name = "check" + i;
        container.appendChild(checkBox);
      }

      // Append a line break
      container.appendChild(document.createElement("br"));
    }
  }
}
