// Mi primera pagina JavaScript
/*
alert("Este un sitio muy copado ojo con lo que haces")
let nombreUsuario = prompt("¿Cual es tu nombre?")
alert("Hola " + nombreUsuario + " bienvenido a esta pagina copada")
let edadUsuario = prompt("¿Cual es tu edad?")
console.log("El usuario tiene " + edadUsuario + " años" )
alert("Este es un mensaje de alerta tu nombre es " + nombreUsuario + " y tenes " + edadUsuario + " años")
*/

// Mensaje con Variables
/*
let nombre = "Alonso" , edad = 21, cumpleanios = "01 de Abril", ciudad = "Buenos Aires", ocupacion = "Estudiante", hobbie="Jugar videojuegos"
console.log("Mi nombre es: " + nombre + " y tengo " + edad + " cumplo el " + cumpleanios + " vivo en la ciudad de/l " + ciudad + " soy " + ocupacion + " y mi hobbie es " + hobbie )
*/

//Calcular Edad
/*
let edadUsuario = prompt("¿Cual es tu edad?")
edadUsuario = edadUsuario * 365
alert("la cantidad de dias: " + edadUsuario )
*/

//Suma de valores
/*
let num1,num2,resultado
 num1 = parseInt(prompt("valor 1:"))
 num2 = parseInt(prompt("valor 2:"))
 resultado = num1 + num2
 console.log(resultado)
 */

 //Cantidad de caracteres
 /*
let carac = prompt("Ingrese un texto de hasta 20 caracteres")
console.log("El texto tiene " + carac.length + " caracteres")
*/

//Calculador de abastecimiento de por vida
let edad = 21, edadMaxima = 80, snackFav = "Papas Fritas",snackxDia = 1,precioxUnidad = "100"
let calculo = (edadMaxima - edad) * 365
calculo = calculo * snackxDia 
precioxUnidad = calculo * precioxUnidad
alert("Vas a necesitar " + calculo + " snacks para que te alcancen hasta los " +  edadMaxima + " años! y voy a gastar " + precioxUnidad  + "$ pesos")

