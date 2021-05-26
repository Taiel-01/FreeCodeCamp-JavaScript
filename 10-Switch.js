/* =======================
?        Switch
======================= */

//*  Declaración switch
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}


//*  Default en switch
function switchOfStuff(val) {
    var answer = "";
    // Cambia solo el código debajo de esta línea
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;       
        default:
            answer = "stuff";
    }
    // Cambia solo el código encima de esta línea
    return answer;
}


//*  Múltiples opciones en switch
function sequentialSizes(val) {
    var answer = "";
    // Cambia solo el código debajo de esta línea
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}