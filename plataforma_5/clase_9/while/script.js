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
let num = 5,num2 = 50



