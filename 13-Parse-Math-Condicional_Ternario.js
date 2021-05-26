/* =======================
?  While - For - Do While
======================= */

//* ================ Genera fracciones aleatorias ================ *//
function randomFraction() {
    return Math.random();
}


//* ============== Genera números enteros aleatorios ============= *//
function randomWholeNum() {
    // Cambia solo el código debajo de esta línea

    return Math.floor(Math.random() * 10);

}


//* ==== Genera números enteros aleatorios dentro de un rango ==== *//
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}


//* =============== Utiliza la función "parseInt" ================ *//
function convertToInteger(str) {
    var a = parseInt(str);
    return a
}

convertToInteger("56");


//* =============== "parseInt" con Radix (Base) ================== *//
function convertToInteger(str) {

    var a = parseInt(str, 2);
    return a
}

convertToInteger("10011");


//* ============= operador condicional (ternario) =============== *//
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


//* ====== múltiples operadores condicionales (ternarios) ======= *//
function checkSign(num) {

    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";

}

checkSign(10);