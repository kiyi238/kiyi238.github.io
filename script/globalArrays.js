var markingList = ["Agouti Tabby","Appaloosa","Backstripe","Badger","Barring","Bat Wings","Blaze","Blush","Body Stripe","Butterfly Wings","Caiman",
                  "Calico","CandleFlame Tabby","Cardinal","Centered","Cheetah","Chest Splash","Classic Tabby","Clouded Leopard","Crown","Dalmatian",
                  "Deer Antlers","Doberman","Dragon Horns","Ear Rims","Ear Tufts","Eastern Dragon","Elk Antlers","Eye Mask","Fairy Wings","Fawn Spots",
                  "Feather Wings","Forehead Diamond","Freckles","Front Fade","German Sheperd","Giraffe","Half","Head","Holstein","House Sparrow",
                  "Husky","Irish","Irish Cheekless","King Cheetah","Leg Blotches","Leg Feathering","Leg Stripes","Legwarmers","Leopard","Lower Fade",
                  "Mackerel Tabby","Mane","Marbled","Merle","Modern Stripes","Muzzle","Neck Spikes","Ocelot","Okapi","Panda","Piebald","Pitbull",
                  "Poison Dart Frog","Pronghorns","Ram Horns","Red Panda","Roan","Rune","Saber Fangs","Shine","Siamese","Skunk","Snow Leopard","Somali",
                  "Song Sparrow","Spotted Tabby","Tabby","Tail","Tail Blotches","Tail Stripes","Tailtip","Thylacine","Tiger","Tobiano","Toes","Turkish Van",
                  "Tuxedo","Undereye","Underside","Unicorn Horn","Upperside","Urajiro","Wild Cat","Wolf","Zebra"];
var markingListNoGrowths = ["Agouti Tabby","Appaloosa","Backstripe","Badger","Barring","Blaze","Blush","Body Stripe","Caiman","Calico","CandleFlame Tabby",
                            "Cardinal","Centered","Cheetah","Chest Splash","Classic Tabby","Clouded Leopard","Crown","Dalmatian","Doberman","Ear Rims","Eye Mask","Fawn Spots","Forehead Diamond",
                            "Freckles","Front Fade","German Sheperd","Giraffe","Half","Head","Holstein","House Sparrow","Husky","Irish","Irish Cheekless","King Cheetah","Leg Blotches","Leg Stripes",
                            "Legwarmers","Leopard","Lower Fade","Mackerel Tabby","Mane","Marbled","Merle","Modern Stripes","Muzzle","Ocelot","Okapi","Panda","Piebald","Pitbull","Poison Dart Frog",
                            "Red Panda","Roan","Rune","Shine","Siamese","Skunk","Snow Leopard","Somali","Song Sparrow","Spotted Tabby","Tabby","Tail","Tail Blotches","Tail Stripes","Tailtip","Thylacine",
                            "Tiger","Tobiano","Toes","Turkish Van","Tuxedo","Undereye","Underside","Upperside","Urajiro","Wild Cat","Wolf","Zebra"];
var opacityList = ["100","90","80","70","60","50","40","30","20","10"];
var geneList = ["AA","Aa","aa"];
var recessives = ["Bat Wings","Butterfly Wings","CandleFlame Tabby","Classic Tabby",
                 "Clouded Leopard","Deer Antlers","Dragon Horns","Ear Tufts","Eastern Dragon",
                 "Elk Antlers","Fairy Wings","Feather Wings","Giraffe","King Cheetah","Mackerel Tabby",
                 "Mane","Marbled","Neck Spikes","Ocelot","Pronghorns","Ram Horns","Saber Fangs",
                 "Snow Leopard","Spotted Tabby","Unicorn Horn"];
var greaters = ["air","fire","water","earth","lightning","plant","ice"];
var breeds = ["lesser","air","longhair","water","fire","munchkin","earth","lightning","plant","ice"];
var growths = ["Deer Antlers","Elk Antlers","Bat Wings","Butterfly Wings","Eastern Dragon","Dragon Horns","Ear Tufts","Fairy Wings",
              "Feather Wings","Leg Feathering","Mane","Neck Spikes","Pronghorns","Ram Horns","Saber Fangs","Unicorn Horn"];
var patternValues = new Map();
patternValues.set("100", 0);
patternValues.set("90", 40);
patternValues.set("80", 80);
patternValues.set("70", 120);
patternValues.set("60", 160);
patternValues.set("50", 200);
patternValues.set("40", 240);
patternValues.set("40", 280);
patternValues.set("30", 320);
patternValues.set("20", 360);
patternValues.set("10", 400);
