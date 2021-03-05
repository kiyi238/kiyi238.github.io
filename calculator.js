function Mweor(breed, base, second, tert, eye, markings, markingGenes, markingColors, markingOpacities) {
  this.breed = document.getElementById(breed).value;
  this.base = document.getElementById(base).value;
  this.second = document.getElementById(second).value;
  this.tert = document.getElementById(tert).value;
  this.eye = document.getElementById(eye).value;
  this.markings = markings;
  this.markingGenes = markingGenes;
  this.markingColors = markingColors;
  this.markingOpacities = markingOpacities;
}

function calculateMwitt() {
  var femaleMweor = new Mweor("breed","base","secondary","tertiary","eye",getMarkings("containerf"),getMarkingGenes("containerf"),getMarkingColors("containerf"),getMarkingOpacities("containerf"));
  var maleMweor = new Mweor("breedm","basem","secondarym","tertiarym","eyem",getMarkings("containerm"),getMarkingGenes("containerm"),getMarkingColors("containerm"),getMarkingOpacities("containerm"));

  var recessives = initializeRecessives();

  var mwittBreed = calculateBreed(femaleMweor, maleMweor);
  var mwittBase = calculateBase(femaleMweor, maleMweor);
  var mwittSeconary = calculateSecondary(femaleMweor, maleMweor);
  var mwittTertiary = calculateTertiary(femaleMweor, maleMweor);
  var mwittEye = calculateEye(femaleMweor, maleMweor);
  var array = calculateMarkings(femaleMweor, maleMweor);
  var mwittMarkings = array[0];
  var mwittMarkingGenes = array[1];
  var mwittMarkingColors = array[2];
  var mwittMarkingOpacities = array[3];

  console.log(mwittBreed);
  console.log(mwittBase);
  console.log(mwittSeconary);
  console.log(mwittTertiary);
  console.log(mwittEye);
  console.log(mwittMarkings.toString());
  console.log(mwittMarkingGenes.toString());
  console.log(mwittMarkingColors.toString());
  console.log(mwittMarkingOpacities.toString());
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
  }

  //Fire combos.
  else if(f.breed == "fire" || m.breed == "fire") {
    if(f.breed == "fire" && (m.breed == "water" || m.breed == "plant" || m.breed == "ice")) {
      breed = "lesser";
    }
    else if(f.breed == "water" || f.breed == "plant" || f.breed == "ice") {
      breed = "lesser";
    }
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
  }

  //Lightning combos.
  else if(f.breed == "lightning" || m.breed == "lightning") {
    if(f.breed == "lightning" && (m.breed == "water" || m.breed == "plant" || m.breed == "earth")) {
      breed = "lesser";
    }
    else if(f.breed == "water" || f.breed == "plant" || f.breed == "earth") {
      breed = "lesser";
    }
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
  }

  //Water combos.
  else if(f.breed == "water" || m.breed == "water") {
    if(f.breed == "water" && (m.breed == "fire" || m.breed == "lightning")) {
      breed = "lesser";
    }
    else if(f.breed == "fire" || f.breed == "lightning") {
      breed = "lesser";
    }
  }

  else if (rand < 0.5) {
    breed = f.breed;
  } else { breed = m.breed; }
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

  for(var m = 0; m < len; m++) {
    //FEMALE TURN.
    //If next marking exists.
    if(f.markings[m]) {
      console.log("Female marking Exists");
      //If marking is dominant.
      if(!recessives.includes(f.markings[m])) {
        console.log("Marking is dominant");
        //If male shares marking.
        if(m.markings.includes(f.markings[m])) {
          console.log("Male shares marking");
          var i = m.markings.indexOf(f.markings[m]);
          var gene = calculateGene(f.markingGenes[m], m.markingGenes[m]);
          //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(f.markings[m]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(blendColors(f.markingColors[m], m.markingColors[i], 0.5));
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[m],m.markingOpacities[i]));
            console.log(calculateGene(mwittMarkings[m]));
            console.log(calculateGene(mwittMarkingGenes[m]));
            console.log(calculateGene(mwittMarkingColors[m]));
            console.log(calculateGene(mwittMarkingOpacities[m]));
          }
          m.markings[i] = "null"
        }
        //Male does not share marking.
        else {
          console.log("Male does not share marking");
          var gene = calculateGene(f.markingGenes[m], "aa");
          //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(f.markings[m]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(blendColors(f.markingColors[m], m.markingColors[i], 0.5));
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[m],"100"));
          }
        }
      }
      //Marking is recessive.
      else {
        console.log("Marking is recessive");
        //If male shares marking.
        if(m.markings.includes(f.markings[m])) {
          console.log("Male shares marking");
          var i = m.markings.indexOf(f.markings[m]);
          var gene = calculateGene(f.markingGenes[m], m.markingGenes[m]);
          //If RECESSIVE marking shows or carries.
          if(gene == "aa" || gene == "Aa") {
            mwittMarkings.push(f.markings[m]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(blendColors(f.markingColors[m], m.markingColors[i], 0.5));
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[m],m.markingOpacities[i]));
          }
          m.markings[i] = "null"
        }
        //Male does not share marking.
        else {
          console.log("Male does not share marking");
          var gene = calculateGene(f.markingGenes[m], "AA");
          //If RECESSIVE marking shows.
          if(gene == "aa" || gene == "Aa") {
            mwittMarkings.push(f.markings[m]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(f.markingColors[m]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(f.markingOpacities[m], f.markingOpacities[m]));
          }
        }
      }
    }
    //MALE TURN.
    //If next marking exists.
    if(m.markings[m]) {
      console.log("Male marking Exists");
      //If marking is not null, and marking is not shared by female.
      if(m.markings[m] != "null" && !f.markings.includes(m.markings[m])) {
        console.log("Male marking not null or shared");
        //If marking is dominant.
        if(!recessives.includes(m.markings[m])) {
          console.log("Male marking dominant");
          var gene = calculateGene(m.markingGenes[m], "aa");
          //If DOMINANT marking shows.
          if(gene == "AA" || gene == "Aa") {
            mwittMarkings.push(m.markings[m]);
            mwittMarkingGenes.push(gene);
            mwittMarkingColors.push(m.markingColors[m]);
            mwittMarkingOpacities.push(calculateMarkingOpacitiy(m.markingOpacities[m], m.markingOpacities[m]));
          }
          m.markings[m] = "null"
        }
        //Marking is recessive.
        else {
          console.log("Male marking recessive");
          //If female does not share marking.
          if(!f.markings.includes(m.markings[m])) {
            var gene = calculateGene(m.markingGenes[m], "AA");
            //If RECESSIVE marking shows.
            if(gene == "aa" || gene == "Aa") {
              mwittMarkings.push(m.markings[m]);
              mwittMarkingGenes.push(gene);
              mwittMarkingColors.push(m.markingColors[m]);
              mwittMarkingOpacities.push(calculateMarkingOpacitiy(m.markingOpacities[m], m.markingOpacities[m]));
            }
            m.markings[m] = "null"
          }
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
