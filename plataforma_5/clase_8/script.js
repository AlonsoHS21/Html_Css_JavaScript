//Practica JS
/*
let edad = prompt("Cual es tu edad?") 

if (edad < 18){alert("Sos menor de edad")}
else {alert("Sos mayor de edad")}
*/

//¿Que devuelve cada expresion?
/*
var x = 10
var y = "a"
y ==="b" || x >= 10 // true --> porque x es igual a 10 con que una sea true basta

var x = 3
var y = 8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // false --> porque la primera condicion es true y con el ! (negado) da falso las dos deben ser true

var str = ""
var msj = "jaja!"
var esGracioso = "false"
!((str || msj) && esGracioso) //false --> el negado vuelve falso todo
*/

//Comparando
// 1 -
/*
let string1 = "hola1"
let string2 = "hola1"
if(string1 == string2){
    alert("Es true")
}
else {
    alert("Es false")
}
*/
// 2 - 
/*
let string1 = "hola1"
let string2 = "hola2"
if(string1 == string2){
    alert("Es true")
}
else {
    alert("Es false")
}
*/
// 3 -
/*
let string = "1"
let number = 1
if(string == number){
    alert("Es true")
}
else {
    alert("Es false")
}
*/
// 4 - 
/*
let string = "2"
let number = 1
if(string == number){
    alert("Es true")
}
else {
    alert("Es false")
}
*/

//Mis primeras condicionales
// 1 -
// if(true){alert("Esta sentencia siempre es true")}
// 2 -
//if(false){alert("Esta sentencia siempre es true")}
// 3 - 
/*
let resp = prompt("¿Como te sientes?")
if(resp == "triste"){console.log("sentate bien :) ")}
*/
// 4 - 
/*
let resp = prompt("¿Cual es el numero secreto?")
if(resp != 4){alert("numero equivocado")}
*/
// 5- 
/*
let cont = prompt("Ingrese su contraseña")
if(cont = "12345"){window.location = "http://www.google.com"}
*/

// Par o impar
/*
let num = prompt("Ingrese un numero")
if((num % 2) == 0){alert("El numero es par")}
else {alert("El numero es impar")}

//¿Me puedo jubilar? // lo hice mas dificil a proposito
// Parte 1
/*
let nac = prompt("Ingrese la año de nacimiento") // en el caso de que no quiera ingresar su edad
var fecha = new Date();
var anioActual = fecha.getFullYear();
let res = anioActual - nac
if(res == 60){
    alert("Te podes jubilar")
}
else { 
res = 60 - res
alert("Te faltan " + res + " años para poder jubilarte")
}
*/
// Parte 2
/*
let nac = prompt("Ingrese la año de nacimiento") // en el caso de que no quiera ingresar su edad
var fecha = new Date();
var anioActual = fecha.getFullYear();
let res = anioActual - nac
if(res == 60 || res == 65){
    alert("Te podes jubilar")
}
else { 
res = 60 - res
alert("Te faltan " + res + " años para poder jubilarte en caso de que seas mujer y en caso de que seas hombre te faltan " + (res + 5) + " años para jubilarte")
}
*/

//Agrega Caminos
/*
let edad = prompt("Ingrese su edad.")
let poi = edad % 2
if(edad < 0 ){
    alert("Error, su edad no es válida")
}
if(edad < 18) {
alert("No puede pasar al bar.")
} 
else if(edad < 21){
alert("Puede pasar al bar, pero no puede tomar alcohol.")
} 
else if(edad == 21 && !(poi == 0)){ // es impar (distinto de cero edad % 2 != 0)
alert("Puede pasar al bar y tomar alcohol, felicidades por cumplir 21 años, Sabias que tu edad es impar?")
}
else{
    alert("Puede pasar al bar y tomar alcohol.")
}
*/

//Adivina el numero
/*
let numeroSecreto = 4
let numeroIngesado = prompt("Cual es el numero secreto?")
if(Number(numeroIngesado) >= 0 ){ //verifico primero si es un numero valido
    if(numeroIngesado == numeroSecreto){alert("Correcto, es el numero secreto :) ")}
    else if(numeroIngesado < numeroSecreto){alert("Incorrecto, el numero secreto es mayor")}
    else if(numeroIngesado > numeroSecreto){alert("Incorrecto, el numero secreto es menor")}
    else{alert("De alguna forma llegaste aca entonces te doy un carita :) ")}
}
else {alert("Error, no es un numero valido")}
*/

//Contenido Bonus: switch
//Ejercicio 1
/*
let textoIngresado = prompt("Ingrese casa o perro o arbol o genio para traducir al ingles")
textoIngresado = textoIngresado.toLowerCase(); //para evitar los problemas de mayusculas y minusculas
switch(textoIngresado)
{
    case 'casa':
        alert("house");
    break
    case 'perro':
        alert("dog");
    break
    case 'arbol':
        alert("tree")
    break
    case 'genio':
        alert("genius")
    break
    default: 
        alert("Palabra ingresada incorrecta")
    break
}
*/
//Ejercicio 2
/*
let valoracion = prompt("Ingrese su valoracion: \n\n 1- Muy Mala \n 2 - Mala \n 3 - Mediocre \n 4 - Buena \n 5 - Muy Buena")
switch(parseInt(valoracion)) //para que no ingrese un numero negativo
{
    case 1:
        alert("Calificaste la película como Muy Mala. Lo lamentamos muchisimo")
    break
    case 2:
        alert("Calificaste la pelicla como Mala, Lo lamentamos mucho")
    break
    case 3:
        alert("Calificaste la pelicula como Mediocre, Lamentamos que no haya sido de su agrado")
    break
    case 4:
        alert("Calificaste la pelicula como Buena, Muchas gracias por su valoracion")
    break
    case 5:
        alert("Calificaste la pelicula como Muy Buena, Muchas gracias el feedback es muy importante para nosotros")
    break
    default: 
        alert("Numero ingresado incorrectamente " + valoracion)
    break
}
alert("Muchas gracias por su visita")
*/
