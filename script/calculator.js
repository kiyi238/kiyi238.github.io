var recessives = ["Bat Wings","Butterfly Wings","CandleFlame Tabby","Classic Tabby",
                  "Clouded Leopard","Deer Antlers","Dragon Horns","Ear Tufts","Eastern Dragon",
                  "Elk Horns","Fairy Wings","Feather Wings","Giraffe","King Cheetah","Mackerel Tabby",
                  "Mane","Marbled","Neck Spikes","Ocelot","Pronghorns","Ram Horns","Saber Fangs",
                  "Snow Leopard","Spotted Tabby","Unicorn Horn"];
var greaters = ["air","fire","water","earth","lightning","plant","ice"];
var growths = ["Deer Antlers","Elk Antlers","Bat Wings","Butterfly Wings","Eastern Dragon","Dragon Horns","Ear Tufts","Fairy Wings",
              "Feather Wings","Leg Feathering","Mane","Neck Spikes","Pronghorns","Ram Horns","Saber Fangs","Unicorn Horn"];
let patternValues = new Map();patternValues.set("100", 0);patternValues.set("90", 40);patternValues.set("80", 80);patternValues.set("70", 120);patternValues.set("60", 160);patternValues.set("50", 200);
                              patternValues.set("40", 240);patternValues.set("40", 280);patternValues.set("30", 320);patternValues.set("20", 360);patternValues.set("10", 400);

function Mweor(breed, base, second, tert, eye, markings, markingGenes, markingColors, markingOpacities) {
  this.breed = breed;
  this.base = base;
  this.second = second;
  this.tert = tert;
  this.eye = eye;
  this.markings = markings;
  this.markingGenes = markingGenes;
  this.markingColors = markingColors;
  this.markingOpacities = markingOpacities;
}

function calculateMwitt() {
  var femaleMweor = new Mweor(document.getElementById("breed").value,document.getElementById("base").value,document.getElementById("secondary").value,document.getElementById("tertiary").value,document.getElementById("eye").value,getMarkings("containerf"),getMarkingGenes("containerf"),getMarkingColors("containerf"),getMarkingOpacities("containerf"));
  var maleMweor = new Mweor(document.getElementById("breedm").value,document.getElementById("basem").value,document.getElementById("secondarym").value,document.getElementById("tertiarym").value,document.getElementById("eyem").value,getMarkings("containerm"),getMarkingGenes("containerm"),getMarkingColors("containerm"),getMarkingOpacities("containerm"));

  var markingResults = calculateMarkings(femaleMweor, maleMweor);
  var mwitt = new Mweor(calculateBreed(femaleMweor, maleMweor), calculateColor(femaleMweor.base, maleMweor.base), calculateColor(femaleMweor.second, maleMweor.second), calculateColor(femaleMweor.tert, maleMweor.tert), calculateColor(femaleMweor.eye, maleMweor.eye), markingResults[0], markingResults[1], markingResults[2], markingResults[3]);

  var container = document.getElementById("cMwittInfo");
  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }

  container.appendChild(document.createTextNode("Breed: " + mwitt.breed));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("Base Color: #" + mwitt.base));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("Secondary Color: #" + mwitt.second));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("Tertiary Color: #" + mwitt.tert));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("Eye Color: #" + mwitt.eye));
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createElement("br"));
  for(var i = 0; i < mwitt.markings.length; i++) {
    container.appendChild(document.createTextNode("Marking " + (i+1) + ": " + mwitt.markings[i] + " " + mwitt.markingGenes[i] + " #" + mwitt.markingColors[i] + " " + mwitt.markingOpacities[i] + "%"));
    container.appendChild(document.createElement("br"));
  }

  drawPreview(mwitt);
}

function calculateBreed(f, m) {
  var breed;
  var rand = Math.random();
  //Canceling and hybrid breed combos.
  //Air combos.
  if(f.breed == "air" || m.breed == "air") {
    if(f.breed == "air") {
      if(m.breed == "plant" || m.breed == "earth") {
        breed = "lesser";
      }
      else if(m.breed == "water") {
        if(rand < 1 && rand > 0.36) {
          breed = f.breed;
        } else if(rand < 0.36 && rand > 0.05) {
          breed = m.breed;
        } else {
          breed = "ice";
        }
      }
      else if(m.breed == "fire") {
        if(rand < 1 && rand > 0.36) {
          breed = f.breed;
        } else if(rand < 0.36 && rand > 0.05) {
          breed = m.breed;
        } else {
          breed = "lightning";
        }
      }
      else if (rand < 0.5) {
        breed = f.breed;
      } else { breed = m.breed; }
    }
    else if(f.breed == "plant" || f.breed == "earth") {
      breed = "lesser";
    }
    else if(f.breed == "water") {
      if(rand < 1 && rand > 0.36) {
        breed = f.breed;
      } else if(rand < 0.36 && rand > 0.05) {
        breed = m.breed;
      } else {
        breed = "ice";
      }
    }
    else if(f.breed == "fire") {
      if(rand < 1 && rand > 0.36) {
          breed = f.breed;
      } else if(rand < 0.36 && rand > 0.05) {
        breed = m.breed;
      } else {
        breed = "lightning";
      }
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Earth combos.
  else if(f.breed == "earth" || m.breed == "earth") {
    if(f.breed == "earth") {
      if(m.breed == "air" || m.breed == "ice" || m.breed == "lightning") {
        breed = "lesser";
      }
      else if(m.breed == "water") {
        if(rand < 1 && rand > 0.36) {
          breed = f.breed;
        } else if(rand < 0.36 && rand > 0.05) {
          breed = m.breed;
        } else {
          breed = "plant";
        }
      }
      else if (rand < 0.5) {
        breed = f.breed;
      } else { breed = m.breed; }
    }
    else if(f.breed == "plant" || f.breed == "earth" || f.breed == "lightning") {
      breed = "lesser";
    }
    else if(f.breed == "water") {
      if(rand < 1 && rand > 0.36) {
        breed = f.breed;
      } else if(rand < 0.36 && rand > 0.05) {
        breed = m.breed;
      } else {
        breed = "plant";
      }
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Fire combos.
  else if(f.breed == "fire" || m.breed == "fire") {
    if(f.breed == "fire" && (m.breed == "water" || m.breed == "plant" || m.breed == "ice")) {
      breed = "lesser";
    }
    else if(f.breed == "water" || f.breed == "plant" || f.breed == "ice") {
      breed = "lesser";
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Ice combos.
  else if(f.breed == "ice" || m.breed == "ice") {
    if(f.breed == "ice") {
      if(m.breed == "fire" || m.breed == "earth") {
        breed = "lesser";
      }
      else if(m.breed == "lightning") {
        if(rand < 1 && rand > 0.36) {
          breed = f.breed;
        } else if(rand < 0.36 && rand > 0.05) {
          breed = m.breed;
        } else {
          breed = "air";
        }
      }
      else if (rand < 0.5) {
        breed = f.breed;
      } else { breed = m.breed; }
    }
    else if(f.breed == "fire" || f.breed == "earth") {
      breed = "lesser";
    }
    else if(f.breed == "lightning") {
      if(rand < 1 && rand > 0.36) {
        breed = f.breed;
      } else if(rand < 0.36 && rand > 0.05) {
        breed = m.breed;
      } else {
        breed = "air";
      }
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Lightning combos.
  else if(f.breed == "lightning" || m.breed == "lightning") {
    if(f.breed == "lightning" && (m.breed == "water" || m.breed == "plant" || m.breed == "earth")) {
      breed = "lesser";
    }
    else if(f.breed == "water" || f.breed == "plant" || f.breed == "earth") {
      breed = "lesser";
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Plant combos.
  else if(f.breed == "plant" || m.breed == "plant") {
    if(f.breed == "plant") {
      if (m.breed == "fire" || m.breed == "air" || m.breed == "lightning") {
        breed = "lesser";
      }
      else if(m.breed == "ice") {
        if(rand < 1 && rand > 0.36) {
          breed = f.breed;
        } else if(rand < 0.36 && rand > 0.05) {
          breed = m.breed;
        } else {
          breed = "water";
        }
      }
      else if (rand < 0.5) {
        breed = f.breed;
      } else { breed = m.breed; }
    }
    else if(f.breed == "fire" || f.breed == "air" || f.breed == "lightning") {
      breed = "lesser";
    }
    else if(f.breed == "ice") {
      if(rand < 1 && rand > 0.36) {
        breed = f.breed;
      } else if(rand < 0.36 && rand > 0.05) {
        breed = m.breed;
      } else {
        breed = "water";
      }
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  //Water combos.
  else if(f.breed == "water" || m.breed == "water") {
    if(f.breed == "water" && (m.breed == "fire" || m.breed == "lightning")) {
      breed = "lesser";
    }
    else if(f.breed == "fire" || f.breed == "lightning") {
      breed = "lesser";
    }
    else if (rand < 0.5) {
      breed = f.breed;
    } else { breed = m.breed; }
  }

  else if (rand < 0.5) {
    breed = f.breed;
  } else { breed = m.breed; }
  return breed;
}

function calculateMarkings(f, m) {
  var mwittMarkings = [];
  var mwittMarkingGenes = [];
  var mwittMarkingColors = [];
  var mwittMarkingOpacities = [];
  var len = 0;
  if(f.markings && m.markings) { len = Math.max(f.markings.length,m.markings.length); }
  else if(f.markings) { len = f.markings.length; }
  else if(m.markings) { len = m.markings.length; }

  for(var v = 0; v < len; v++) {
    //FEMALE TURN.
    //If next marking exists.
    if(Array.isArray(f.markings) && f.markings.length && f.markings[v]) {
////////If marking is dominant.
      if(!recessives.includes(f.markings[v])) {
        //If male shares marking.
        if(Array.isArray(m.markings) && m.markings.length && m.markings.includes(f.markings[v])) {
          var i = m.markings.indexOf(f.markings[v]);
          var gene = calculateGene(f.markingGenes[v], m.markingGenes[i]);
          //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(f.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(calculateMarkingColor(f.markingColors[v], m.markingColors[i]));
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[v],m.markingOpacities[i]));
          }
          m.markings[i] = "null"
        }
        //Male does not share marking.
        else {
          var gene = calculateGene(f.markingGenes[v], "aa");
            //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(f.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(f.markingColors[v]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[v],f.markingOpacities[v]));
          }
        }
      }
////////Marking is recessive.
      else {
        //If male shares marking.
        if(Array.isArray(m.markings) && m.markings.length && m.markings.includes(f.markings[v])) {
          var i = m.markings.indexOf(f.markings[v]);
          var gene = calculateGene(f.markingGenes[v], m.markingGenes[i]);
          //If RECESSIVE marking shows or carries.
          if(gene == "aa" || gene == "Aa") {
            mwittMarkings.push(f.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(calculateMarkingColor(f.markingColors[v], m.markingColors[i]));
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[v],m.markingOpacities[i]));
          }
          m.markings[i] = "null"
        }
        //Male does not share marking.
        else {
          var gene = calculateGene(f.markingGenes[v], "AA");
          //If RECESSIVE marking shows or carries.
          if(gene == "aa" || gene == "Aa") {
            mwittMarkings.push(f.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(f.markingColors[v]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[v], f.markingOpacities[v]));
          }
        }
      }
    }
    //MALE TURN.
    //If next marking exists.
    if(Array.isArray(m.markings) && m.markings.length && m.markings[v]) {
      //If marking is not null, and marking is not shared by female.
      if(m.markings[v] != "null" && f.markings && f.markings.length && !f.markings.includes(m.markings[v])) {
//////////If marking is dominant.
        if(!recessives.includes(m.markings[v])) {
          var gene = calculateGene(m.markingGenes[v], "aa");
          //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(m.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(m.markingColors[v]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(m.markingOpacities[v], m.markingOpacities[v]));
          }
          m.markings[v] = "null"
        }
//////////Marking is recessive.
        else {
          var gene = calculateGene(m.markingGenes[v], "AA");
          //If RECESSIVE marking shows.
          if(gene == "aa" || gene == "Aa") {
            mwittMarkings.push(m.markings[v]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(m.markingColors[v]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(m.markingOpacities[v], m.markingOpacities[v]));
          }
          m.markings[v] = "null"
        }
      }
    }
  }
  return [mwittMarkings, mwittMarkingGenes, mwittMarkingColors, mwittMarkingOpacities];
}

function calculateColor(fC, mC) {
  var color;
  var rand = Math.random();
  if(fC == "star" || fC == "grsc" || fC == "rnbw" || mC == "star" || mC == "grsc" || mC == "rnbw") {
    if(rand < 0.5) { color = mC; }
    else { color = fC; }
  }
  else {
    if(rand < 1 && rand > 0.66) { color = fC; }
    else if(rand < 0.66 && rand > 0.33) { color = mC; }
    else { color = blendColors(fC, mC, 0.5); }
  }
  return color;
}

function calculateMarkingColor(fC, mC) {
  var color;
  var rand = Math.random();
  if(fC == "star" || fC == "grsc" || fC == "rnbw" || mC == "star" || mC == "grsc" || mC == "rnbw") {
    if(rand < 0.5) { color = mC; }
    else { color = fC; }
  }
  else {
    color = blendColors(fC, mC, 0.5);
  }
  return color;
}

function calculateMarkingOpacitiy(fOp, mOp) {
  var biggest = Math.max(parseInt(fOp), parseInt(mOp));
  var smallest = Math.min(parseInt(fOp), parseInt(mOp));
  var index = smallest;
  var array = [];
  if (index - 10 > 0) { array.push(index - 10); }
  while(index < biggest && index < 100) {
    array.push(index);
    index = index + 10;
  }
  array.push(index);
  if (index + 10 < 100) { array.push(index + 10); }
  var opacity = array[Math.floor(Math.random() * array.length)];
  return opacity;
}

function calculateGene(fGene, mGene) {
  var mwittGene;
  var rand = Math.random();
  //AAxAA
  if(fGene == "AA" && mGene == "AA") {
    mwittGene = "AA";
  }
  //AAxAa and AaxAA
  else if((fGene == "AA" && mGene == "Aa") || (fGene == "Aa" && mGene == "AA")) {
    if(rand < 0.5) {
      mwittGene = "AA";
    } else { mwittGene = "Aa"; }
  }
  //AaxAa
  else if(fGene == "Aa" && mGene == "Aa") {
    if(rand < 0.5) {
      mwittGene = "Aa";
    }
    else if(rand > 0.5 && rand < 0.75) {
      mwittGene = "AA";
    }
    else { mwittGene = "aa"; }
  }
  //Aaxaa and aaxAa
  else if((fGene == "Aa" && mGene == "aa") || (fGene == "aa" && mGene == "Aa")) {
    if(rand < 0.5) {
      mwittGene = "Aa";
    } else { mwittGene = "aa"; }
  }
  //AAxaa and aaxAA
  else if((fGene == "AA" && mGene == "aa") || (fGene == "aa" && mGene == "AA")) {
    mwittGene = "Aa";
  }
  //aaxaa
  else if(fGene == "aa" && mGene == "aa") {
    mwittGene = "aa";
  }
  return mwittGene;
}

function blendColors(colorA, colorB, amount) {
  var [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  var [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  var r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  var g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  var b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return r + g + b;
}

function getMarkings(con) {
  var markings = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("select");

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("marking")) {
        markings.push(inputs[index].value);
      }
    }
  }
  return markings;
}

function getMarkingGenes(con) {
  var genes = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("select");

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("gene")) {
        genes.push(inputs[index].value);
      }
    }
  }
  return genes;
}

function getMarkingOpacities(con) {
  var opacities = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("select");

  if(typeof inputs[0] != 'undefined') {
    for (var index = 0; index < inputs.length; ++index) {
      if(inputs[index].name.includes("opacity")) {
        opacities.push(inputs[index].value);
      }
    }
  }
  return opacities;
}

function getMarkingColors(con) {
  var colors = [];
  var container = document.getElementById(con);
  var inputs = container.getElementsByTagName("input");

  if(typeof inputs[0] != 'undefined') {
    for (index = 0; index < inputs.length; ++index) {
      colors.push(inputs[index].value);
    }
  }
  return colors;
}

function drawPreview(mwitt) {
  var canvas = document.getElementById('prevCanvas');
  var ctx = canvas.getContext('2d');
  //Clear the main canvas.
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "source-over";

  var counter = 0;
  var totalImages = 6;
  var color = new Image();
  var lines = new Image();
  var eyeColor = new Image();
  var eyeWhites = new Image();
  var secondary = new Image();
  var secondaryTop = new Image();       //Only ice.
  var secondaryTopLines = new Image();  //Only ice.
  var tertiary = new Image();           //Only greaters.
  var copyright = new Image();
  var markingImages = [];
  var growthImages = [];
  let patternMap = new Map();
  var star = false;
  var grsc = false;
  var rnbw = false;

  //Calculate image count.
  if(greaters.includes(mwitt.breed)) {
    totalImages++;
    if(mwitt.breed == "ice") { totalImages += 2; }
  }
  if(mwitt.base == "star" || mwitt.second == "star" || mwitt.tert == "star" || mwitt.eye == "star") {
    star = true;
    totalImages++;
  }
  if(mwitt.base == "grsc" || mwitt.second == "grsc" || mwitt.tert == "grsc" || mwitt.eye == "grsc") {
    grsc = true;
    totalImages++;
  }
  if(mwitt.base == "rnbw" || mwitt.second == "rnbw" || mwitt.tert == "rnbw" || mwitt.eye == "rnbw") {
    rnbw = true;
    totalImages++;
  }
  for(var i = 0; i < mwitt.markings.length; i++) {
    if(mwitt.markingColors[i] == "star" && !star) {
      star = true;
      totalImages++;
    }
    if(mwitt.markingColors[i] == "grsc" && !grsc) {
      grsc = true;
      totalImages++;
    }
    if(mwitt.markingColors[i] == "rnbw" && !rnbw) {
      rnbw = true;
      totalImages++;
    }
    //Recessive markings.
    if(recessives.includes(mwitt.markings[i])) {
      if(mwitt.markingGenes[i] == "aa") {
        //Recessive growths.
        if(growths.includes(mwitt.markings[i])) { totalImages += 2; }
        else { totalImages++; }
      }
    }
    //Leg feathering.
    else if(mwitt.markings[i] == "Leg Feathering") { totalImages += 4; }
    //Dominant markings.
    else { totalImages++; }
  }

  //Image load check.
  var onloadCallback = function() {
    counter++;
    if (counter < totalImages) { return; }
    allLoadedCallback();
  };

  //MAIN DRAW FUNCTION.
  var allLoadedCallback = function() {
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    //Draw copyright first cause it's not transparent for some fuckin reason.
    ctx.drawImage(copyright, 0, 0);  //Add to main canvas.

    //Color and draw the base.
    if(mwitt.base == "star" || mwitt.base == "grsc" || mwitt.base == "rnbw") {
      tempCtx.drawImage(patternMap.get(mwitt.base), 0, 0);
    }
    else {
      tempCtx.fillStyle = '#' + mwitt.base;
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    }
    tempCtx.globalCompositeOperation = "destination-in";
    tempCtx.drawImage(color, 0, 0);
    ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.

    //Clear the temporary canvas.
    tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
    tempCtx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw markings.
    var k, n;
    for (k = 0, n = 0; k < mwitt.markings.length; k++) {
      //Recessive markings.
      if(recessives.includes(mwitt.markings[k])) {
        if(mwitt.markingGenes[k] == "aa") {
          if(!growths.includes(mwitt.markings[k])) {
            //Draw marking.
            tempCtx.globalCompositeOperation = "source-over";
            if(mwitt.markingColors[k] == "star" || mwitt.markingColors[k] == "grsc" || mwitt.markingColors[k] == "rnbw") {
              var pattern = tempCtx.createPattern(patternMap.get(mwitt.markingColors[k]), "repeat-x");
              tempCtx.drawImage(pattern, patternValues.get(mwitt.markingOpacities[k]), 0);
            }
            else {
              tempCtx.globalAlpha = (mwitt.markingOpacities[k]/100);
              tempCtx.fillStyle = '#' + mwitt.markingColors[k];
              tempCtx.fillRect(0, 0, canvas.width, canvas.height);
            }
            tempCtx.globalCompositeOperation = "destination-in";
            tempCtx.drawImage(markingImages[n], 0, 0);
            ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.
            n++;

            //Clear the temporary canvas.
            tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
            tempCtx.fillRect(0, 0, canvas.width, canvas.height);
            tempCtx.globalAlpha = 1;
          }
        }
      }
      //Dominant markings.
      else {
        //Draw marking.
        tempCtx.globalCompositeOperation = "source-over";
        if(mwitt.markingColors[k] == "star" || mwitt.markingColors[k] == "grsc" || mwitt.markingColors[k] == "rnbw") {
          var pattern = tempCtx.createPattern(patternMap.get(mwitt.markingColors[k]), "repeat-x");
          tempCtx.drawImage(pattern, patternValues.get(mwitt.markingOpacities[k]), 0);
        }
        else {
          tempCtx.globalAlpha = (mwitt.markingOpacities[k]/100);
          tempCtx.fillStyle = '#' + mwitt.markingColors[k];
          tempCtx.fillRect(0, 0, canvas.width, canvas.height);
        }
        tempCtx.globalCompositeOperation = "destination-in";
        tempCtx.drawImage(markingImages[n], 0, 0);
        ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.
        n++;

        //Clear the temporary canvas.
        tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);
        tempCtx.globalAlpha = 1;
      }
    }

    //Color and draw the secondary.
    tempCtx.globalCompositeOperation = "source-over";
    if(mwitt.second == "star" || mwitt.second == "grsc" || mwitt.second == "rnbw") {
      tempCtx.drawImage(patternMap.get(mwitt.second), 0, 0);
    }
    else {
      tempCtx.fillStyle = '#' + mwitt.second;
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    }
    tempCtx.globalCompositeOperation = "destination-in";
    tempCtx.drawImage(secondary, 0, 0);
    ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.

    //If breed is a greater.
    if(greaters.includes(mwitt.breed)) {
      tempCtx.globalCompositeOperation = "source-over";
      if(mwitt.tert == "star" || mwitt.tert == "grsc" || mwitt.tert == "rnbw") {
        tempCtx.drawImage(patternMap.get(mwitt.tert), 0, 0);
      }
      else {
        tempCtx.fillStyle = '#' + mwitt.tert;
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);
      }
      tempCtx.globalCompositeOperation = "destination-in";
      tempCtx.drawImage(tertiary, 0, 0);
      ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.

      //Clear the temporary canvas.
      tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    }

    //Clear the temporary canvas.
    tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
    tempCtx.fillRect(0, 0, canvas.width, canvas.height);

    //Color and draw the eyes.
    tempCtx.globalCompositeOperation = "source-over";
    if(mwitt.eye == "star" || mwitt.eye == "grsc" || mwitt.eye == "rnbw") {
      tempCtx.drawImage(patternMap.get(mwitt.eye), 0, 0);
    }
    else {
      tempCtx.fillStyle = '#' + mwitt.eye;
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    }
    tempCtx.globalCompositeOperation = "destination-in";
    tempCtx.drawImage(eyeColor, 0, 0);
    ctx.drawImage(eyeWhites, 0, 0);   //Add to main canvas.
    ctx.drawImage(tempCanvas, 0, 0);  //Add to main canvas.

    //Clear the temporary canvas.
    tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
    tempCtx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw lines.
    ctx.drawImage(lines, 0, 0);      //Add to main canvas.

    //Draw growths.
    var i, j, n;
    for (i = 0, j = 0, n = 0; i < mwitt.markings.length; i++) {
      //Leg feathering.
      //NEEDS CODE FOR OPACITIES.!!
      if(mwitt.markings[i] == "Leg Feathering") {
        //Draw front feathering.
        tempCtx.globalCompositeOperation = "source-over";
        if(mwitt.markings[i] == "star" || mwitt.markings[i] == "grsc" || mwitt.markings[i] == "rnbw") {
          tempCtx.drawImage(patternMap.get(mwitt.markingsColors[i]), 0, 0);
        }
        else {
          tempCtx.fillStyle = '#' + mwitt.markingsColors[i];
          tempCtx.fillRect(0, 0, canvas.width, canvas.height);
        }
        tempCtx.globalCompositeOperation = "destination-in";
        tempCtx.drawImage(markingImages[n], 0, 0);
        ctx.drawImage(tempCanvas, 0, 0);        //Add to main canvas.
        ctx.drawImage(growthImages[j], 0, 0);   //Add to main canvas.
        j++;
        n++;

        //Clear the temporary canvas.
        tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);

        //Draw back feathering.
        tempCtx.globalCompositeOperation = "source-over";
        tempCtx.fillStyle = '#' + mwitt.markingColors[i];
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);
        tempCtx.globalCompositeOperation = "destination-in";
        tempCtx.drawImage(growthImages[j], 0, 0);
        j++;
        ctx.drawImage(tempCanvas, 0, 0);        //Add to main canvas.
        ctx.drawImage(growthImages[j], 0, 0);   //Add to main canvas.
        j++;

        //Clear the temporary canvas.
        tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);
      }
      //Recessive markings.
      else if(growths.includes(mwitt.markings[i])) {
        if(mwitt.markingGenes[i] == "aa") {
          //Draw growth.
          tempCtx.globalCompositeOperation = "source-over";
          if(mwitt.markings[i] == "star" || mwitt.markings[i] == "grsc" || mwitt.markings[i] == "rnbw") {
            tempCtx.drawImage(patternMap.get(mwitt.markingColors[i]), 0, 0);
          }
          else {
            tempCtx.fillStyle = '#' + mwitt.markingsColors[i];
            tempCtx.fillRect(0, 0, canvas.width, canvas.height);
          }
          tempCtx.globalCompositeOperation = "destination-in";
          tempCtx.drawImage(markingImages[n], 0, 0);
          ctx.drawImage(tempCanvas, 0, 0);        //Add to main canvas.
          ctx.drawImage(growthImages[j], 0, 0);   //Add to main canvas.
          j++;
          n++;

          //Clear the temporary canvas.
          tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
          tempCtx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
      else if(recessives.includes(mwitt.markings[i])) {
        if(mwitt.markingGenes[i] == "aa") {
          n++;
        }
      }
      else {
        n++;
      }
    }

    //If breed is ice.
    if(mwitt.breed == "ice") {
      tempCtx.globalCompositeOperation = "source-over";
      if(mwitt.second == "star" || mwitt.second == "grsc" || mwitt.second == "rnbw") {
        tempCtx.drawImage(patternMap.get(mwitt.second), 0, 0);
      }
      else {
        tempCtx.fillStyle = '#' + mwitt.second;
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);
      }
      tempCtx.globalCompositeOperation = "destination-in";
      tempCtx.drawImage(secondaryTop, 0, 0);
      ctx.drawImage(tempCanvas, 0, 0);           //Add to main canvas.
      ctx.drawImage(secondaryTopLines, 0, 0);    //Add to main canvas.

      //Clear the temporary canvas.
      tempCtx.fillStyle = "rgba(0, 0, 0, 0)";
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  //IMAGE LOADING.
  //Load tertiary if greater, and ice extras if ice.
  if (greaters.includes(mwitt.breed)) {
    tertiary.onload = onloadCallback;
    tertiary.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/tertiary.png';

    if(mwitt.breed == "ice") {
      secondaryTop.onload = onloadCallback;
      secondaryTopLines.onload = onloadCallback;
      secondaryTop.src = 'https://kiyi238.github.io/images/ice/secondary_top.png';
      secondaryTopLines.src = 'https://kiyi238.github.io/images/ice/secondary_top_lines.png';
    }
  }

  //Load marking and growth images.
  for (var i = 0; i < mwitt.markings.length; i++) {
    //Recessive markings.
    if(recessives.includes(mwitt.markings[i])) {
      if(mwitt.markingGenes[i] == "aa") {
        //Recessive growths.
        if(growths.includes(mwitt.markings[i])) {
          var img = new Image();
          var img2 = new Image();
          var str = mwitt.markings[i].toLowerCase().replace(/\s/g, '');
          img.onload = onloadCallback;
          img2.onload = onloadCallback;
          img.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_' + str + '_base.png';
          img2.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_' + str + '.png';
          markingImages.push(img);
          growthImages.push(img2);
        }
        else {
          var img = new Image();
          img.onload = onloadCallback;
          var str = mwitt.markings[i].toLowerCase().replace(/\s/g, '');
          img.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/marking_' + str + '.png';
          markingImages.push(img);
        }
      }
    }
    //Leg feathering.
    else if(mwitt.markings[i] == "Leg Feathering") {
      var img = new Image();
      var img2 = new Image();
      var img3 = new Image();
      var img4 = new Image();
      var str = "legfeathering";
      img.onload = onloadCallback;
      img2.onload = onloadCallback;
      img3.onload = onloadCallback;
      img4.onload = onloadCallback;
      img.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_legfeathering_front_base.png';
      img2.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_legfeathering_front.png';
      img3.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_legfeathering_back_base.png';
      img4.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/growth_legfeathering_back.png';
      markingImages.push(img);
      growthImages.push(img2);
      growthImages.push(img3);
      growthImages.push(img4);
    }
    //Dominant markings.
    else {
      var img = new Image();
      img.onload = onloadCallback;
      var str = mwitt.markings[i].toLowerCase().replace(/\s/g, '');
      img.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/marking_' + str + '.png';
      markingImages.push(img);
    }
  }

  //Load patterns if any are used.
  if(star) {
    var starImg = new Image();
    starImg.onload = onloadCallback;
    starImg.src = 'https://kiyi238.github.io/images/patterns/starry_sky.png';
    patternMap.set("star", starImg);
  }
  if(grsc) {
    var grscImg = new Image();
    grscImg.onload = onloadCallback;
    grscImg.src = 'https://kiyi238.github.io/images/patterns/grayscale.png';
    patternMap.set("grsc", grscImg);
  }
  if(rnbw) {
    var rnbwImg = new Image();
    rnbwImg.onload = onloadCallback;
    rnbwImg.src = 'https://kiyi238.github.io/images/patterns/rainbow.png';
    patternMap.set("rnbw", rnbwImg);
  }

  //Attach callbacks.
  color.onload = onloadCallback;
  lines.onload = onloadCallback;
  eyeColor.onload = onloadCallback;
  eyeWhites.onload = onloadCallback;
  secondary.onload = onloadCallback;
  copyright.onload = onloadCallback;

  //Load remaining images.
  color.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/color.png';
  lines.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/lines.png';
  eyeColor.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/eyes.png';
  eyeWhites.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/eyewhite.png';
  secondary.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/secondary.png';
  copyright.src = 'https://kiyi238.github.io/images/copyright.png';
}
