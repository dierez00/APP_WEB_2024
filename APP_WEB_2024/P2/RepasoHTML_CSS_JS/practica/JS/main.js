//Este es un comentario de una linea
/* Esto es un comentario de varias lineas */

//alerta
//alert("Alertaaaa!!")

//variables
var nombre = "Diego Antunez"
let nombre2 = "Miguel"
let edad = 20
let logica = true
let estatura = 1.90

//Mostrar en pantalla
let concatenacion="La persona: " +nombre2+", tiene la edad de "+edad+" años"
//document.write(concatenacion)

let datos = document.getElementById("informacion")
datos.innerHTML=`
    <br>
    <hr>
    <h1>La persona: ${nombre2}, tiene una altura de ${estatura}</h1>
    <hr>
    <br>
`

let datos2 = document.getElementById("informacion2")
datos2.innerHTML=`
    <h2>La edad es ${edad}</h2>
`

if (estatura>=1.90){
    //   document.write("Eres una persona alta")
    datos.innerHTML+=`
        <hr>
        <h3>Es una persona alta</h3>
    `
}

else{
    datos.innerHTML+=`
        <hr>
        <h3>Es una persona promedio</h3>
    `
}

for(let i = 1; i<=5; i++){
    datos.innerHTML+=`
        <hr>
        <h3>For: El numero es: ${i} </h3>
    `
}

let i = 1
while (i<=5){
    datos.innerHTML+=`
        <hr>
        <h3>While: El numero es: ${i} </h3>
    `
    i++
}

let o = 1

do{
    datos.innerHTML+=`
        <hr>
        <h3>Do While: El numero es: ${o} </h3>
    `
    o++
}
while(o<=5);


//funciones

//1.- Funcion que no recibe parametros y no regresa valor
function suma(){
    let n1 = 2;
    let n2 = 4;
    suma = n1+n2
    console.log("La suma es: " + suma)
    datos.innerHTML+=`
        <hr>
        <h3>La suma es: ${suma}</h3>
    `
}

suma()

//2.- Funcion que no recibe parametros regresa valor
function suma2(){
    let n1 = 2;
    let n2 = 4;
    suma = n1+n2
    return suma
}

let sum = suma2()

datos.innerHTML+=`
        <hr>
        <h3>La suma es: ${sum}</h3>
    `
//3.- Funcion que recibe parametros y no regresa valor
function suma3(n1,n2){
    suma = n1+n2
    datos.innerHTML+=`
        <hr>
        <h3>La suma es: ${suma}</h3>
    `
}

suma3(2,4)

//4.- Funcion qye recibe parametros y regresa valor
function suma4(num1,num2){
    let n1 = num1
    let n2 = num2
    suma = n1+n2
    return suma
}

sum = suma4(2,4)

datos.innerHTML+=`
        <hr>
        <h3>La suma es: ${sum}</h3>
    `
//5.- Funcion tipo flecha
const sumaFlecha=(a, b)=>a+b;
datos.innerHTML+=`
    <hr>
    <h3>La sumaFlecha es: ${sumaFlecha(3,6)}</h3>
`



//arreglos
let animales=[]
animales[0]="Perico"
animales[1]="Leon"
animales[2]="Gato"


for(let i = 0; i < animales.length; i++) {
    datos.innerHTML += `
        <hr>
        <h3>El animal es: ${animales[i]}</h3>
    `;
}

animales=["Perro", "Raton", "Mono"]

animales.forEach(element => {
    datos.innerHTML += `
        <hr>
        <h3>El animal es: ${element}</h3>
    `;
})
