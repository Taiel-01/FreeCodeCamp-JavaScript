/* =======================
? Sentecias if - else - else if
?  Operadores de Comparacion 
?     Operadores Logicos
======================= */


//* sentencias "If"
function myFuction(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}


//* operador de igualdad
function myFuction(val) {
    if (val == 7) { 
      return "Equal";
    }
    return "Not Equal";
}


//* operador de igualdad estricto
function myFuction(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
}
function myFuction(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
}


//* operador de desigualdad 
function myFuction(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}


//* operador de estricta desigualdad
function myFuction(val) {
    if (val !== 99) { 
      return "Not Equal";
    }
    return "Equal";
}


//* operador "mayor que"
function myFuction(val) {
    if (val > 100) {  
      return "Over 100";
    }
    if (val > 10) {  
      return "Over 10";
    }
    return "10 or Under";
}


//* operador "mayor o igual que"
function myFuction(val) {
    if (val >= 20) {  // Cambia esta línea
      return "20 or Over";
    }
    if (val >= 10) {  // Cambia esta línea
      return "10 or Over";
    }
    return "Less than 10";
}


//* operador "menor que"
function myFuction(val) {
    if (val < 25) {  
        return "Under 25";
    }
    if (val < 55) {  
        return "Under 55";
    }
    return "55 or Over";
}


//* operador "menor o igual que"
function myFuction(val) {
    if (val <= 12) { 
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}


//* operador lógico "and"  
function myFuction(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}


//* Comparaciones con el operador lógico "or"
function myFuction(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }
    return "Inside";
}


//* sentencia "Else" 
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}


//* sentencia "else if"
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}