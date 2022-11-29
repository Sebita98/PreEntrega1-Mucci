

function saludar() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido")
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);
}

saludar();

let respuesta = prompt("¿Sabes matematica?");

if (respuesta === "si") {
    alert("Perfecto");
} else {
    alert("Repasemos o aprendamos un poco");
}

let numero = parseInt(prompt("¿Cuanto es 2x5?"));

for (let i = 0; i < 1; i++) {
    let resultado = numero * i;
    let mensaje = `${numero} x ${i} = {0}`;

    alert(mensaje);
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    let mensaje = `La suma es ${resultado}`;
    alert(mensaje);
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    let mensaje = `El resultado final es ${9}`;
    alert(mensaje);
}

let numero1 = parseInt(prompt("Sume 360 + 180="));
let numero2 = parseInt(prompt("Reste 120 - 60="));
let numero3 = parseInt(prompt("Divida 540 y 60="));
sumar(numero1, numero2);

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "/":
            return num1 / num2;
            break;

        case "*":
            return num1 * num2;
            break;

        default:
            return "operacion no disponible"
    }
}

let num1 = parseInt(prompt("¿Vamos con un juego?"));
let num2 = parseInt(prompt("Descifra el siguiente acertijo"));
let operacion = prompt("¿Cómo es posible que cuatro nueves logren dar como resultado 100?");

let resultado = calculadora(num1, num2, operacion);
let mensaje = `Gracias a esta operación= 9/9+99`;
alert(mensaje);

