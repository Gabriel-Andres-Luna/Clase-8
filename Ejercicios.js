//1 - Variables y Operadores
//A
var numero1, numero2, suma;
numero1 = 2;
numero2 = 55;
suma = numero1 + numero2;
//B
var string1, string2, strsuma;
string1 = 'UAI';
string2 = 'LUNA';
strsuma = string1 + ' ' + string2;
//C 
var longsuma = string1.length + string2.length;

//2 - Strings
//A
var string = 'Buenos dias'
console.log(string.toUpperCase())
//B
var string = 'Buenos dias';
string = string.substring(0, 5);
//C
var string = 'Buenos dias';
string = string.substring(string.length-3)
//D
var string = 'Buenos dias';
var string2 = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
//E
var string = 'Buenos dias';
var string2 = string.indexOf(" ");
//F
var string = 'Buenos dias';
var posicion = string.indexOf(' ');
var letra1 = string.substring(0, 1).toUpperCase();
var letra2 = string.substring(posicion + 1, posicion + 2).toUpperCase();
var palabra1 = string.substring(1, posicion).toLowerCase();
var palabra2 = string.substring(posicion + 2).toLowerCase();
var Total = letra1 + palabra1 + " " + letra2 + palabra2;

//3 - Arrays
//A
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);
//B
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log(meses);
//C
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift("Nuevo1");
meses.push("Nuevo2");
console.log(meses);
//D
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift();
meses.pop();
console.log(meses);
//E
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log(meses);
//F
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var resultado = meses.join("-");
console.log(resultado);
//G
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var resultado = meses.slice(4, 11);
console.log(resultado);

//4 - If - Else
//A
var Random = Math.random();
if (Random >= 0.5){
  alert("Mayor a 0.5");
} else {
  alert("Menor a 0.5");
}
//B
var age = Math.floor(Math.random() * 100);
if (age < 2){
    alert("Bebe");
} else if (age >= 2 && age <= 12){
    alert("Niño");
} else if (age >= 13 && age <= 19){
    alert("Adolescente");
} else if (age >= 20 && age <= 30){
    alert("Joven");
} else if (age >= 31 && age <= 60){
    alert("Adulto");
} else if (age >= 61 && age <= 75){
    alert("Adulto Mayor");
} else {
    alert("Anciano");
}

//5 - For
//A
var palabras = ["mate", "steam", "uai", "monitor", "computadora"];
for (var i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}
//B
var palabras = ["mate", "steam", "uai", "monitor", "computadora"];
for (var i = 0; i < palabras.length; i++) {
  var palabras2 = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  alert(palabras2);
}
//C
var palabras = ["mate", "steam", "uai", "monitor", "computadora"];
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert(sentence);
//D
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log(numeros);

//6 - Funciones
//A
function suma(a, b) {
    return a + b;
}
var sum = suma(12, 3);
console.log(sum);
//B
function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
      alert("error");
      return NaN;
    }
    return a + b;
}
var resultado = suma(19, "O");
console.log(resultado);
//C
function validateInteger(nro) {
    return nro % 1 === 0;
}
console.log(validateInteger(2));
console.log(validateInteger(6.3));
//D
function validateInteger(nro) {
    return nro %  1 === 0;
}
function suma(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("error");
      a = Math.round(a);
      b = Math.round(b);
    }
    return a + b;
}
var resultado = suma(5.1, 9.5);
console.log(resultado);
//E
function validateInteger(nro) {
    return Number.isInteger(nro);
}
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert("error");
      return NaN;
    }
    
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("error");
      a = Math.round(a);
      b = Math.round(b);
    }
    return a + b;
} 
var resultado = suma(100.1, 55);
console.log(resultado);