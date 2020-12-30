//While ¿Si o Si?
/*
let input

while( !(input = prompt('Escriba su nombre, por favor.')) ){ //input esta vacio por ahora entonces cuando ingreso el nombre sale del loop
  alert("No recibimos la información.")
}

alert("¡Gracias! Su nombre es: " + input + ".")
*/

//¿Que imprimen estos Loops?
/*
// sin probarlos -- > num = 11
// lo probe --> true
let num = 1
while(num <= 10){
  console.log(num)
  num += 2
} 

// sin probarlos -- > num = 20
// lo probe --> true
let num = 1
while(num <= 20){
  if(!(num % 4)){
    console.log(num)
  }
  num++
}

// sin probarlos -- > infinito
// lo probe --> true
let num = 100
while(num < 150 ){
  console.log(num+1)
  num--
}
*/

//Escribiendo While Loops
// 1- Todos los números entre -10 y 19
/*
let num = -10
while (num <= 19) {
    console.log(num)
    num++
}
*/

// 2- Todos los números pares entre 10 y 40
/*
let num = 10
while (num <= 40) {
    if((num % 2) == 0){
        console.log(num)
    }
    num++
}
*/

// 3- Todos los números impares entre 300 y 333.
/*
let num = 300
while (num <= 333) {
    if((num % 2) != 0){
        console.log(num)
    }
    num++
}
*/

// 4 - Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
//FALTA COMPLETAR

//Mi primer bot
/*
let clientes = 20
let cantidadDeClientes = 0
while(cantidadDeClientes < clientes){
  cantidadDeClientes++
  console.log("¡Bienvenid@ a mi cafe! Su mesa es la " + cantidadDeClientes + " y hay " + cantidadDeClientes)
}
*/
//Producto Acumulado FALTA COMPLETAR
/*
let cantNum = 5, resp = 1
let aux = 1
while (resp < cantNum) {
   console.log("antes " + resp)
    resp = resp * (aux + 1)
    console.log("despues " + resp)
    aux++
}*/

//Par o Impar
//manera 1
/*
let numeroIngresado = 1
while(numeroIngresado != 0 || numeroIngresado < 0){
    numeroIngresado = prompt("Ingrese un numero")
    if((numeroIngresado % 2) == 0){
      alert("El numero ingresado es par")
      alert(numeroIngresado)
    }
    else if((numeroIngresado % 2) != 0) {
      alert("El numero ingresado es impar")
      alert(numeroIngresado)
    }
    else (numeroIngresado == null){ 
      alert("Cancelaste la operacion")
    }
}
*/

//FizzBuzz
/*
let num = 1
while (num <= 100) {
  if((num % 3) == 0){
    console.log("Fizz")
  }
  if((num % 5) == 0){
    console.log("Buzz")
  }
  if((num % 3) == 0 && (num % 5) == 0){
    console.log("FizzBuzz")
  }
  else {
    console.log(num)
  }
  num++
}
*/

//Contador de positivos //NO TERMINADO
/*
let num = prompt("Ingrese un numero positivo")
let cont = 0
while (num > 0) {
  num = prompt("Ingrese un numero positivo")
  if(num == 0){
    console.log("El numero ingresado es 0 no sumara al contador")
  }
  else if(num < 0){
    console.log("El numero ingresado el negativo ")
  }
  else if(num > 0){
    cont++
  }
  console.log(num)
}
console.log("La cantidad de numero positivos ingresados : " + cont)
*/

//Burro-matico
/*
let resp = prompt("¿Ya merito llegamos? si - no")
 resp = resp.toLowerCase()
while (resp == "no") {
   resp = prompt("¿Ya merito llegamos? si - no")
   resp = resp.toLowerCase()
}
if(resp == "si"){
  console.log("bienvenida a Muy Muy Lejano")
}
else {
  console.log("El programa termino debido a un error")
}
*/

//¿Cual es el mayor?
/*
let num = prompt("Ingrese un numero")
let num2 = prompt("Ingrese otro numero")
while (num != 0 || num2 != 0) {
  if(num > num2){
    console.log(num + " es mayor a " + num2)
  }
  else if(num2 > num){
    console.log(num2 + " es mayor a " + num)
  }
  else if(num == num2){
    console.log("Ingrese un numero distinto")
  }
  num = prompt("Ingrese un numero")
  num2 = prompt("Ingrese otro numero")
}
console.log("El programa termino porque ingresaste un cero")
*/

//Piedra, Papel o Tijera
/*
let valorUsuario = prompt("Ingrese Piedra, Papel o Tijera")
let valorRandom = Math.floor(Math.random() * 3) + 1 // el + 1 evita que empiece desde el 0
valorUsuario = valorUsuario.toLowerCase()
if(valorUsuario == "piedra"){
  console.log(valorRandom)
  switch(valorRandom){
    case 1:
      alert("Piedra")
      alert("Empate de piedra")
    break;
    case 2:
      alert("Papel")
      alert("Gana el bot!")
    break;
    case 3:
      alert("Tijera")
      alert("Ganas vos!!")
    break;
    default:
      console.log("hubo un error en el if de piedra")
    break;
  }
}
else if(valorUsuario == "papel"){
  console.log(valorUsuario)
  switch(valorRandom){
    case 1:
      alert("Piedra")
      alert("Ganas vos!!")
    break;
    case 2:
      alert("Papel")
      alert("Empate a papel")
    break;
    case 3:
      alert("Tijera")
      alert("Gana el bot!")
    break;
    default:
      console.log("hubo un error en el if de papel")
    break;
  }
}
else if(valorUsuario == "tijera"){
  switch(valorRandom){
    case 1:
      alert("Piedra")
      alert("Gana el bot!")
    break;
    case 2:
      alert("Papel")
      alert("Ganas vos!!")
    break;
    case 3:
      alert("Tijera")
      alert("Empate a tijera")
    break;
    default:
      console.log("hubo un error en el if de piedra")
    break;
  }
}
else {
  console.log("No entro en ninguno de los if anteriores")
}
*/
//Adiviná un número
/*
let num = prompt("Ingrese un numero entre el 1 y el 10")
while (num == "") {
   num = prompt("Ingrese un numero entre el 1 y el 10")
}
let numRandom = Math.floor(Math.random() * parseInt(num)) + 1;
let numSecreto = 0,contador = 0
while(numRandom != numSecreto){
  numSecreto = prompt("¿Cual es el numero secreto?")
  if(numRandom > numSecreto){
    alert("El numero ingresado es mayor")
  }
  if(numRandom < numSecreto){
    alert("El numero ingresado es menor")
  }
  contador++
}
if(numRandom == numSecreto){
  alert("El numero ingresado es el correcto necesitaste " + contador + " intentos")
}
else {
  alert("Hubo un error")
}
*/
//¡Bienvenido, N!
let num = prompt("Ingrese un numero menor o igual a 5")
while(num > 0 && num <= 5){
  switch(parseInt(num)){
    case 1:
      console.log("¡Bienvenido, 1!");
    break;
    case 2:
      console.log("¡Bienvenido, 1! \n ¡Bienvenido, 2! Te presento a 1.");
    break;
    case 3:
      console.log("¡Bienvenido, 1! \n¡Bienvenido, 2! Te presento a 1 \n ¡Bienvenido, 3! Te presento a 1 y a 2.");
    break;
    case 4:
      console.log("¡Bienvenido, 1! \n ¡Bienvenido, 2! Te presento a 1. \n ¡Bienvenido, 3! Te presento a 1 y a 2. \n ¡Bienvenido, 4! Te presento a 1, a 2 y a 3.");
    break;
    case 5:
      console.log("¡Bienvenido, 1! \n ¡Bienvenido, 2! Te presento a 1. \n ¡Bienvenido, 3! Te presento a 1 y a 2. \n ¡Bienvenido, 4! Te presento a 1, a 2 y a 3. \n ¡Bienvenido, 5! Te presento a 1, a 2, a 3 y a 4.");
    break;
  }
}
console.log("Termino el programa")


