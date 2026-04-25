var markingList = ["Abada Horns", "Agouti Tabby","Appaloosa","Aura","Back Spikes","Backstripe","Badger","Barring","Bat Wings","Bioluminescence","Blaze","Blush","Body Stripe",
                "Budding Horns","Burmese","Butterfly Antennae","Butterfly Wings","Caiman","Calico","CandleFlame Tabby","Cardinal","Cave Paintings","Centered","Cheetah",
                "Chest Heart","Chest Splash","Classic Tabby","Clouded Leopard","Crown","Dalmatian","Deer Antlers","Doberman","Doily","Dragon Horns","Ear Rims","Ear Tufts",
                "Eastern Dragon","Elk Antlers","Eye Mask","Fairy Wings","Fawn Spots","Feather Wings","Fiend Horns","Filigree","Forehead Diamond","Forehead Heart","Fox",
                "Freckles","Front Fade","Gemstones","German Sheperd","Giraffe","Glyphs","Great White Shark","Half","Half Right","Head","Head Feather Wings","Hearts","Holstein",
                "Hood","House Sparrow","Husky","Igneous Horns","Irish","Irish Cheekless","Jaguar","King Cheetah","Leg Blotches","Leg Feathering","Leg Stripes","Legwarmers",
                "Leopard","Lower Fade","Lynx Point","Mackerel Tabby","Mane","Marbled","Melanistic Tiger","Merle","Modern Stripes","Moon Phases","Moth Antennae","Moth Wings",
                "Moustache","Muzzle","Muzzle Tip","Neck","Neck Spikes","Nose Strip","Ocelot","Okapi","Panda","Piebald","Pitbull","Poison Dart Frog","Pronghorns","Raccoon",
                "Ram Horns","Rear Fade","Red Panda","Roan","Rune","Saber Fangs","Shimmer","Shine","Siamese","Skunk","Snow Leopard","Socks","Somali","Song Sparrow","Spotted Tabby",
                "Stardust","Stars","Striations","Tabby","Tail","Tail Blotches","Tail Stripes","Tailtip","Tapir","Thylacine","Tiger","Tobiano","Toes","Tortoiseshell",
                "Tortoiseshell Inverted","Turkish Van","Tuxedo","Undereye","Underside","Unicorn Horn","Upper Fade","Upperside","Urajiro","Whale Shark","Wild Cat","Wolf","Zebra"];
var markingListNoGrowths = ["Agouti Tabby","Appaloosa","Aura","Backstripe","Badger","Barring","Bioluminescence","Blaze","Blush","Body Stripe",
                "Burmese","Caiman","Calico","CandleFlame Tabby","Cardinal","Cave Paintings","Centered","Cheetah","Chest Heart","Chest Splash",
                "Classic Tabby","Clouded Leopard","Crown","Dalmatian","Doberman","Doily","Ear Rims","Ear Tufts","Eye Mask","Fawn Spots","Filigree",
                "Forehead Diamond","Forehead Heart","Fox","Freckles","Front Fade","German Sheperd","Giraffe","Glyphs","Great White Shark","Half",
                "Half Right","Head","Hearts","Holstein","Hood","House Sparrow","Husky","Irish","Irish Cheekless","Jaguar","King Cheetah","Leg Blotches",
                "Leg Stripes","Legwarmers","Leopard","Lower Fade","Lynx Point","Mackerel Tabby","Marbled","Melanistic Tiger","Merle","Modern Stripes","Moon Phases",
                "Moustache","Muzzle","Muzzle Tip","Neck","Nose Strip","Ocelot","Okapi","Panda","Piebald","Pitbull","Poison Dart Frog","Raccoon",
                "Rear Fade","Red Panda","Roan","Rune","Shimmer","Shine","Siamese","Skunk","Snow Leopard","Socks","Somali","Song Sparrow","Spotted Tabby",
                "Stardust","Stars","Striations","Tabby","Tail","Tail Blotches","Tail Stripes","Tailtip","Tapir","Thylacine","Tiger","Tobiano","Toes","Tortoiseshell",
                "Tortoiseshell Inverted","Turkish Van","Tuxedo","Undereye","Underside","Upper Fade","Upperside","Urajiro","Whale Shark","Wild Cat","Wolf","Zebra"];
var recessives = ["Back Spikes","Bat Wings","Butterfly Wings","CandleFlame Tabby","Classic Tabby",
                 "Clouded Leopard","Deer Antlers","Dragon Horns","Ear Tufts","Eastern Dragon",
                 "Elk Antlers","Fairy Wings","Feather Wings","Fiend Horns","Gemstones","Giraffe","Head Feather Wings","Igneous Horns","Jaguar","King Cheetah","Mackerel Tabby",
                 "Mane","Marbled","Melanistic Tiger","Moth Wings","Neck Spikes","Ocelot","Pronghorns","Ram Horns","Saber Fangs",
                 "Snow Leopard","Spotted Tabby","Unicorn Horn"];
var opacityList = ["100","90","80","70","60","50","40","30","20","10"];
var geneList = ["AA","Aa","aa"];
var greaters = ["air","fire","water","earth","lightning","plant","ice"];
var breeds = ["lesser","air","longhair","water","fire","munchkin","earth","lightning","plant","ice"];
var growths = ["Abada Horns","Back Spikes","Bat Wings","Budding Horns","Butterfly Antennae","Butterfly Wings","Deer Antlers","Dragon Horns","Elk Antlers","Eastern Dragon","Ear Tufts","Fairy Wings",
              "Feather Wings","Fiend Horns","Gemstones","Head Feather Wings","Igneous Horns","Leg Feathering","Mane","Moth Wings","Neck Spikes","Pronghorns","Ram Horns","Saber Fangs","Unicorn Horn"];
var characteristicList = ["None","Bioluminous","Fade","Orante","Outline","Tiger"];
var patternValues = new Map([
    ["100", 0],
    ["90", 40],
    ["80", 80],
    ["70", 120],
    ["60", 160],
    ["50", 200],
    ["40", 240],
    ["30", 280],
    ["20", 320],
    ["10", 400]
]);
var patternCodes = new Map([
    ["glitter_gold", "gglt"],
    ["glitter_rose_gold", "rglt"],
    ["glitter_silver", "sglt"],
    ["pastel", "pstl"],
    ["tiedye", "tdye"],
    ["gold", "gold"],
    ["cool", "cool"],
    ["copper", "cppr"],
    ["opal_black", "warm"],
    ["opal_blue", "blko"],
    ["opal_white", "bluo"],
    ["opal_blue", "opal"],
    ["rainbow", "rnbw"],
    ["starry_sky", "star"],
    ["grayscale", "grsc"],
]);
