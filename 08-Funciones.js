/* =======================
?       Funciones
======================= */


//* ============= Crear y llamar funcion ==============

function myFunction() {
    console.log("Hello World");
}

myFunction();


//* =========== Argumentos en las funciones ===========

function functionWithArgs(a, b) {
    console.log(a + b)
}

functionWithArgs(2, 2)


//* ========== Variables Globales y Locales ===========

var myGlobal = 10;

function fun1() {
    var myLocal = 10;
    return myLocal;
}


//* ================= Uso de return ===================

function timesFive(num) {
    return num * 5;
}

timesFive(2)


//* == Asignación con un valor devuelto por la funcion ==

function timesFive(num) {
    return num * 5;
}

timesFive(2)
var answer = timesFive(2)

