let viajes;
let eleccionViajes;
let precioMiami = 200000;
let precioBrasil = 150000;
let precioAustralia = 350000;
let precioEspaña = 300000;
let cantidad;
let montoTotalPrimerViaje;
let montoTotalSengundoViaje;
let montoTotalTercerViaje;
let montoTotalCuartoViaje;

alert("Viajes a 4 destinos con precios unicos");

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

eleccionViajes = parseInt(prompt("Seleccione el numero del viaje que desea elegir: \n \n 1- Miami. \n 2-Brasil. \n 3-Australia. \n 4-España."));

function viajeElegido(eleccionViajes){
    while(eleccionViajes != 1 || eleccionViajes != 2 || eleccionViajes != 3 || eleccionViajes != 4){
        if(eleccionViajes == 1){
            return alert("Eligio el viaje a Miami. Con un valor de " + precioMiami + " pesos");
        }else if(eleccionViajes == 2) {
            return alert("Eligio el viaje a Brasil. Con un valor de " + precioBrasil + " pesos");

        }else if(eleccionViajes == 3) {
            return alert("Eligio el viaje a Australia. Con un valor de " + precioAustralia + " pesos");

        }else if(eleccionViajes == 4) {
            return alert("Eligio el viaje a mEspaña. Con un valor de " + precioEspaña + " pesos");
        }
        eleccionViajes = parseInt(prompt("No selecciono ningun viaje. Por favor vuelva a elegir: \n \n 1- Miami. \n 2-Brasil. \n 3-Australia. \n 4-España."));
    }
}

viajeElegido (eleccionViajes);
cantidad = parseInt(prompt("Cuantas personas viajan?"));

function multiplicacion(cantidad, eleccionViajes){
    if(eleccionViajes ==1){
        return cantidad * precioMiami;
    }else if (eleccionViajes ==2){
        return cantidad * precioBrasil;

    }else if (eleccionViajes ==3){
        return cantidad * precioAustralia;

    }else if (eleccionViajes ==4){
        return cantidad * precioEspaña;
    }
  
}

montoTotalPrimerViaje = multiplicacion(cantidad, eleccionViajes);

alert("El precio de su primer viaje es de " + montoTotalPrimerViaje + "pesos");

// let otroViaje = prompt("¿Quiere cambiar de viaje? \n\n 1- Si \n 2- No");

// while(otroViaje != 1 || otroViaje != 2 ){
//     if(otroViaje == 1){
//         eleccionViajes = parseInt(prompt("Seleccione el numero del viaje que desea elegir: \n \n 1- Miami. \n 2-Brasil. \n 3-Australia. \n 4-España."));
//         viajeElegido(eleccionViajes);
//         cantidad = parseInt(prompt("Ingrese que viaje desea realizar"));
//         montoTotalSengundoViaje = multiplicacion(cantidad, eleccionViajes);
//         alert("el monto total de su viaje es de: " + montoTotalTercerViaje + " pesos");
//         break;

//     }else{
//         otroViaje = prompt("La opcion indicada no es correcta. Desea elegir otro viaje? \n \n 1-Si \n 2-No")
//     }
// }



// let viajeTotal = alert("El precio total de ambos viajes es de:" + (montoTotalPrimerViaje + montoTotalTercerViaje) + "pesos");

alert ("Gracias por confiar en nosotros. Le llegara su voleto al mail");






