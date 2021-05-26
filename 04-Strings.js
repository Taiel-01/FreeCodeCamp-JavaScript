/* =======================
?   Cadenas de texto
======================= */

//* ============ Concatenar strings ============ *//
//? 1# Declara variables de cadena
    var myFirstName = "Taiel"
    var myLastName = "Nunes"
    var myName = myFirstName + " " + myLastName

//? 2# Concatena con operador "+"
    var myName = "Taiel" + " Nunes";


//? 3# Concatena con operador "+=" 
    var myName = "Taiel";
    myName += " Nunes";

//? 4# Construye cadenas con variables
    var myName = "Taiel";
    var myStr = "My name is" + myName + "Nunes";

//? 5# Agrega variables a cadenas
    var myFirstName = "Taiel";
    var myLastName = "Nunes";
    myFirstName += myLastName;



//* ============ Escapar comillas literales en strings ============ *//
//? 1# utilizar barra invertida 
    var myStr = "my \"fist Name\" is \"Taiel\"."

//? 2# utilizar otro tipo de comillas 
    var myStr = '<a href="#" target="_blank">Link</a>';
 
 

//* ============ .length ============ *//
var myNameLength = 0;
var myName = "Lovelace";

myNameLength += myName.length;