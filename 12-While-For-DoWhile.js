/* =======================
?  While - For - Do While
======================= */

//* ============ Itera con el bucle "while" de JavaScript ============ *//
var myArray = [];

var i = 5;
while (i >= 0) {
    myArray.push(i)
    i--;
}

console.log(myArray);


//* ==================== Itera con el bucle "for" ==================== *//
var myArray = []

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

console.log(myArray)


//* ============ Itera números impares con un bucle "for" ============ *//
var myArray = []

for (var i = 1; i <= 9; i += 2) {
    myArray.push(i)
}

console.log(myArray)


//* ============= Cuenta hacia atrás con un bucle "for" ============== *//
var myArray = []

for (var i = 9; i >= 1; i -= 2) {
    myArray.push(i)
}

console.log(myArray)


//* ======== Itera a través de un arreglo con un bucle "for" ========= *//
var myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

console.log(total)


//* ====================== Anida bucles "for" ======================= *//
function multiplyAll(arr) {
    var product = 1;
    // Cambia solo el código debajo de esta línea
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Cambia solo el código encima de esta línea
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//* =============== Itera con el bucle "do...while" ================ *//
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray)


//* ============== Reemplaza bucles usando recursión =============== *//
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}

console.log(sum([1], 0))