function addFields(num, con){
    var markingList = ["Agouti Tabby","Appaloosa","Backstripe","Badger","Barring","Bat Wings","Blaze","Blush","Body Stripe","Butterfly Wings","Caiman",
                      "Calico","CandleFlame Tabby","Cardinal","Centered","Cheetah","Chest Splash","Classic Tabby","Clouded Leopard","Crown","Dalmatian",
                      "Deer Antlers","Doberman","Dragon Horns","Ear Rims","Ear Tufts","Eastern Dragon","Elk Antlers","Eye Mask","Fairy Wings","Fawn Spots",
                      "Feather Wings","Forehead Diamond","Freckles","Front Fade","German Sheperd","Giraffe","Half","Head","Holstein","House Sparrow",
                      "Husky","Irish","Irish Cheekless","King Cheetah","Leg Blotches","Leg Feathering","Leg Stripes","Legwarmers","Leopard","Lower Fade",
                      "Mackerel Tabby","Mane","Marbled","Merle","Modern Stripes","Muzzle","Neck Spikes","Ocelot","Okapi","Panda","Piebald","Pitbull",
                      "Poison Dart Frog","Pronghorns","Ram Horns","Red Panda","Roan","Runes","Saber Fangs","Shine","Siamese","Skunk","Snow Leopard","Somali",
                      "Song Sparrow","Spotted Tabby","Tabby","Tail","Tail Blotches","Tail Stripes","Tailtip","Thylacine","Tiger","Tobiano","Toes","Turkish Van",
                      "Tuxedo","Undereye","Underside","Unicorn Horn","Upperside","Urajiro","Wild Cat","Wolf","Zebra"];
    var opacityList = ["100","90","80","70","60","50","40","30","20","10"];
    var geneList = ["AA","Aa","aa"];
    // Number of inputs to create
    var number = document.getElementById(num).value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById(con);
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (var i = 0; i < number; i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode("Marking " + (i+1) + ": "));
        // Create an <input> element, set its type and name attributes
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
        // Append a line break
        container.appendChild(document.createElement("br"));
    }
}
