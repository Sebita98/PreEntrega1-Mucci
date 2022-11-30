function saludar() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido")
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);
}

saludar();

let respuesta = prompt("¿Quieres viajar?");

if (respuesta === "si") {
    alert("Encuentra los siguientes viajes");
} else {
    alert("Esperemos encontrarnos en otro momento");
}







