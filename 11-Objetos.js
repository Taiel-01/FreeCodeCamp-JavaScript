/* =======================
?        Objects
======================= */

//* ================= Construye objetos en JavaScript ================== *//
var myDog = {
    "name": "Mati",
    "legs": 4,
    "tails": 1,
    "friends": ["Turtles ", "Other turtles"]
};


//* ================= Accede a propiedades de objetos ================== *//
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


//* ================== Accede con notación de corchete ================== *//
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];


//* =========== Accede a propiedades de objetos con variables =========== *//
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


//* =========== Accede a propiedades de objetos con variables =========== *//
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder"
myDog.name = "Happy Coder"


//* ===================== Añade nuevas propiedades ===================== *//
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
//? 1#
myDog["bark"] = "woof";
//? 2#
myDog.bark = "woof";


//* ================= Elimina propiedades en un objeto ================= *//
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
//? 1#
delete myDog["tails"];
//? 2#
delete myDog.tails;


//* ================ Usa objetos para hacer búsquedas ================== *//
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",

        "bravo": "Boston",

        "charlie": "Chicago",

        "delta": "charlie",

        "echo": "echo",

        "foxtrot": "foxtrot"
    };
    result = lookup[val]
    return result;
};

console.log(phoneticLookup("alpha"))


//* ============= Verifica las propiedades de un objeto  =============== *//
function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found"
    }

}



//* ================= Manipulando objectos complejos ================== *//
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "King Crimson",
        "title": "In The Court Of The Crimson King",
        "release_year": 1969,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
    }
];

console.log(myMusic[1].formats[0])


//* =================== Accede a objetos anidados ==================== *//
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = undefined;
gloveBoxContents = myStorage.car.inside["glove box"];



//* =================== Accede a arreglos anidados ==================== *//
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = ""
var secondTree = myPlants[1].list[1];
console.log(secondTree)