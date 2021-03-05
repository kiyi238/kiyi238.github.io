var recessives = ["Bat Wings","Butterfly Wings","Candleflame Tabby","Classic Tabby",
                  "Clouded Leopard","Deer Antlers","Dragon Horns","Ear Tufts","Eastern Dragon",
                  "Elk Horns","Fairy Wings","Feather Wings","Giraffe","King Cheetah","Mackerel Tabby",
                  "Mane","Marbled","Neck Spikes","Ocelot","Pronghorns","Ram Horns","Saber Fangs",
                  "Snow Leopard","Spotted Tabby","Unicorn Horn"];
var greaters = ["air","fire","water","earth","lightning","plant","ice"];
var growths = ["Deer Antlers","Elk Antlers","Bat Wings","Butterfly Wings","Eastern Dragon","Dragon Horns","Ear Tufts","Fairy Wings",
              "Feather Wings","Leg Feathering","Mane","Neck Spikes","Pronghorns","Ram Horns","Saber Fangs","Unicorn Horn"];


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
  var mwitt = new Mweor(calculateBreed(femaleMweor, maleMweor), calculateBase(femaleMweor, maleMweor), calculateSecondary(femaleMweor, maleMweor), calculateTertiary(femaleMweor, maleMweor), calculateEye(femaleMweor, maleMweor), markingResults[0], markingResults[1], markingResults[2], markingResults[3]);

  var container = document.getElementById("cMwittInfo");
  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }

  container.appendChild(document.createTextNode("Possible Mwitt: "));
  container.appendChild(document.createElement("br"));
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
        if(rand < 1 && rand > 0.64) {
          breed = f.breed;
        } else if(rand < 0.64 && rand > 0.31) {
          breed = m.breed;
        } else {
          breed = "ice";
        }
      }
      else if(m.breed == "fire") {
        if(rand < 1 && rand > 0.64) {
          breed = f.breed;
        } else if(rand < 0.64 && rand > 0.31) {
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
      if(rand < 1 && rand > 0.64) {
        breed = f.breed;
      } else if(rand < 0.64 && rand > 0.31) {
        breed = m.breed;
      } else {
        breed = "ice";
      }
    }
    else if(f.breed == "fire") {
      if(rand < 1 && rand > 0.64) {
          breed = f.breed;
      } else if(rand < 0.64 && rand > 0.31) {
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
        if(rand < 1 && rand > 0.64) {
          breed = f.breed;
        } else if(rand < 0.64 && rand > 0.31) {
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
      if(rand < 1 && rand > 0.64) {
        breed = f.breed;
      } else if(rand < 0.64 && rand > 0.31) {
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
        if(rand < 1 && rand > 0.64) {
          breed = f.breed;
        } else if(rand < 0.64 && rand > 0.31) {
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
      if(rand < 1 && rand > 0.64) {
        breed = f.breed;
      } else if(rand < 0.64 && rand > 0.31) {
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
        if(rand < 1 && rand > 0.64) {
          breed = f.breed;
        } else if(rand < 0.64 && rand > 0.31) {
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
      if(rand < 1 && rand > 0.64) {
        breed = f.breed;
      } else if(rand < 0.64 && rand > 0.31) {
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
  console.log(breed);
  return breed;
}

function calculateBase(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.base;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.base;
  } else {
    color = blendColors(f.base, m.base, 0.5);
  }
  return color;
}

function calculateSecondary(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.second;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.second;
  } else {
    color = blendColors(f.second, m.second, 0.5);
  }
  return color;
}

function calculateTertiary(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.tert;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.tert;
  } else {
    color = blendColors(f.tert, m.tert, 0.5);
  }
  return color;
}

function calculateEye(f, m) {
  var color;
  var rand = Math.random();
  if(rand < 1 && rand > 0.66) {
    color = f.eye;
  } else if(rand < 0.66 && rand > 0.33) {
    color = m.eye;
  } else {
    color = blendColors(f.eye, m.eye, 0.5);
  }
  return color;
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
            mwittMarkingColors.push(blendColors(f.markingColors[v], m.markingColors[i], 0.5));
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
            mwittMarkingColors.push(blendColors(f.markingColors[v], m.markingColors[i], 0.5));
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
  return mwittGene;
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
  var color = new Image();
  color.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/color.png';
  var lines = new Image();
  lines.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/lines.png';
  var eyeColor = new Image();
  eyeColor.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/eyes.png';
  var eyeWhites = new Image();
  eyeWhites.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/eyewhite.png';
  var secondary = new Image();
  secondary.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/secondary.png';
  var tertiary = new Image();
  if (greaters.includes(mwitt.breed)) {
    tertiary.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/tertiary.png';
  }
  var copyright = new Image();
  copyright.src = 'https://kiyi238.github.io/images/copyright.png';

  var canvas = document.getElementById('prevCanvas');
  var ctx = can.getContext('2d');

  var tempCanvas = document.createElement('canvas');
  var tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  tempCtx.fillStyle = '#' + mwitt.base;
  tempCtx.fillRect(0, 0, canvas.width, canvas.height);
  tempCtx.globalCompositeOperation = "destination-in";
  tempCtx.drawImage(color, 0, 0);

  ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(eyeWhites, 0, 0, canvas.width, canvas.height);

  tempCtx.clearRect(0, 0, canvas.width, canvas.height);
  tempCtx.fillStyle = '#' + mwitt.eye;
  tempCtx.fillRect(0, 0, canvas.width, canvas.height);
  tempCtx.globalCompositeOperation = "destination-in";
  tempCtx.drawImage(eyeColor, 0, 0);

  ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

  tempCtx.clearRect(0, 0, canvas.width, canvas.height);
  tempCtx.fillStyle = '#' + mwitt.second;
  tempCtx.fillRect(0, 0, canvas.width, canvas.height);
  tempCtx.globalCompositeOperation = "destination-in";
  tempCtx.drawImage(secondary, 0, 0);

  ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

  if(greaters.includes(mwitt.breed)) {
    tempCtx.clearRect(0, 0, canvas.width, canvas.height);
    tempCtx.fillStyle = '#' + mwitt.tert;
    tempCtx.fillRect(0, 0, canvas.width, canvas.height);
    tempCtx.globalCompositeOperation = "destination-in";
    tempCtx.drawImage(tertiary, 0, 0);

    ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

    if(mwitt.breed == "ice") {
      var secondaryTop = new Image();
      secondaryTop.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/secondary_top.png';
      var secondaryTopLines = new Image();
      secondaryTopLines.src = 'https://kiyi238.github.io/images/' + mwitt.breed + '/secondary_top_lines.png';

      tempCtx.clearRect(0, 0, canvas.width, canvas.height);
      tempCtx.fillStyle = '#' + mwitt.second;
      tempCtx.fillRect(0, 0, canvas.width, canvas.height);
      tempCtx.globalCompositeOperation = "destination-in";
      tempCtx.drawImage(secondaryTop, 0, 0);

      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(secondaryTopLines, 0, 0, canvas.width, canvas.height);
    }
  }

  //Markings

  ctx.drawImage(lines, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(copyright, 0, 0, canvas.width, canvas.height);
}
