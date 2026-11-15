// 1. Saldo del usuario
let saldo = 0;
//1.1 Denominaciones de dinero que acepta la máquina
const billetesAceptados =(2000,5000,10000,20000)
const monedasAceptadas =(500,1000)

//1.2 Dinero disponible en la máquina para devolver cambio
let cajaBilletes={
    20000: 5,
    10000: 5,
    5000: 5,
    2000: 5,
};

let cajaMonedas={
    1000: 10,
    500: 10,
};

//1.3 Función para recibir dinero
function recibirDinero(valor) {
if (billetesAceptados.includes(valor) || monedasAceptadas.includes(valor)) {
saldo += valor;
console.log("Dinero recibido: $" + valor);
console.log("Saldo actual: $" + saldo);
return true;
} else {
    console.log("Esta denominación no es aceptada por la máquina.");
    return false;
    }
}

// 1.4. Función para calcular el cambio
function calcularCambio(cantidad) {
let cambioPendiente = cantidad;
let cambio = {};
let denominaciones = [20000, 10000, 5000, 2000, 1000, 500];

for (let denominacion of denominaciones) {
    let cantidadDisponible;
    if (denominacion >= 2000) {cantidadDisponible = cajaBilletes[denominacion];
        } else {
        cantidadDisponible = cajaMonedas[denominacion];
        }

let cantidadNecesaria = Math.floor(cambioPendiente / denominacion);
let cantidadEntregada = Math.min(cantidadNecesaria, cantidadDisponible);
    if (cantidadEntregada > 0) {cambio[denominacion] = cantidadEntregada;cambioPendiente -= cantidadEntregada * denominacion;
        }
    }

    if (cambioPendiente === 0) {
    return cambio;
    } else {
        return null;
    }
}

//1.5 Función para devolver el cambio
function devolverCambio() {
let cambio = calcularCambio(saldo);
if (cambio === null) {
console.log("La máquina no tiene cambio suficiente.");
return false;
}

for (let denominacion in cambio) {let cantidad = cambio[denominacion];
if (denominacion >= 2000) {cajaBilletes[denominacion] -= cantidad;
} else {
cajaMonedas[denominacion] -= cantidad;}
console.log("Entregar " + cantidad + " de $" + denominacion);
}

console.log("Cambio devuelto: $" + saldo);
saldo = 0;
return true;
}

// 2. Inventario inicial de la máquina
let cafeDisponible = 500//gramos
let lecheDisponible = 2000;//mililitros
let chocolateDisponible = 300;//gramos
let azucarDisponible = 500;//gramos

// 3. Producto 1: Mocachino
const mocachinoNombre = "Mocachino";
const mocachinoPrecio = 8000; // COP
const mocachinoCafe = 18; // gram
const mocachinoLeche = 150; // mililitros
const mocachinoChocolate = 20; // gram
let mocachinoAzucar = 10; // gram

// 4. Producto 2: Capuchino
const capuchinoNombre = "Capuchino";
const capuchinoPrecio = 7000; // COP
const capuchinoCafe = 18; // gram
const capuchinoLeche = 120; // mililitros
let capuchinoAzucar = 10; // gram

// 5. Producto 3: Café latte
const latteNombre = "Cafe latte";
const lattePrecio = 7500//COP;
const latteCafe = 18//gramos;
const latteLeche = 200//mililitros;
let latteAzucar = 10//gramos;

// 6. Producto 4: Espresso
const espressoNombre = "Espresso";
const espressoPrecio = 4000; // COP
const espressoCafe = 18; // gram
let espressoAzucar = 10; // gram

// 7. Producto 5: Americano
const americanoNombre = "Americano";
const americanoPrecio = 5000; // COP
const americanoCafe = 18; // gram
let americanoAzucar = 10; // gram

//8. operadores aritmeticos
let precioDosMocachinos = mocachinoPrecio * 2;
let precioPorPersona = precioDosMocachinos / 2;
let sobranteCafe = cafeDisponible % mocachinoCafe;
console.log ( "precio de dos mocachinos", precioDosMocachinos);
console.log ( "precio por persona", precioPorPersona);
console.log ( "sobrante de cafe", sobranteCafe);

//9. operadores de asignación
//saldo += 10000; //Ingresa 10.000 COP a la máquina
console.log("Saldo disponible", saldo);

//saldo -= mocachinoPrecio; //Compra un Mocachino
console.log("Saldo disponible después de comprar un Mocachino", saldo);

//10.comprobar saldo del mocachino

if (saldo >= mocachinoPrecio){
    console.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//10.comprobar ingredientes del mocachino
if (cafeDisponible >= mocachinoCafe && lecheDisponible >=mocachinoLeche && chocolateDisponible >=mocachinoChocolate && azucarDisponible >= mocachinoAzucar) {
    console.log("Hay suficientes ingredientes para preparar un mocachino");
} else {
    console.log("No hay suficientes ingredientes para preparar un mocachino");
}

//11.comprobar saldo del capuchino
if (saldo >= capuchinoPrecio){
    console.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//11.comprobar ingredientes del capuchino
if (cafeDisponible >= capuchinoCafe && lecheDisponible >=capuchinoLeche && azucarDisponible >= capuchinoAzucar) {
    console.log("Hay suficientes ingredientes para preparar un capuchino");
} else {
    console.log("No hay suficientes ingredientes para preparar un capuchino");
}

//12.comprobar saldo del café latte
if (saldo >= lattePrecio){
    console.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//12.comprobar ingredientes del café latte
if (cafeDisponible >= latteCafe && lecheDisponible >=latteLeche && azucarDisponible >= latteAzucar) {
    console.log("Hay suficientes ingredientes para preparar un café latte");
} else {
    console.log("No hay suficientes ingredientes para preparar un café latte");
}

//13.comprobar saldo del espresso
if (saldo >= espressoPrecio){
    console.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//13.comprobar ingredientes del espresso
if (cafeDisponible >= espressoCafe && azucarDisponible >= espressoAzucar) {
    console.log("Hay suficientes ingredientes para preparar un espresso");
} else {
    console.log("No hay suficientes ingredientes para preparar un espresso");
}

//14.comprobar saldo del americano
if (saldo >= americanoPrecio){
    console.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//14.comprobar ingredientes del americano
if (cafeDisponible >= americanoCafe && azucarDisponible >= americanoAzucar) {
    console.log("Hay suficientes ingredientes para preparar un americano");
} else {
    console.log("No hay suficientes ingredientes para preparar un americano");
}

//15.menú de la máquina de café
let opcion = prompt("Bienvenido a la máquina de café. Por favor seleccione una opción: \n1. Mocachino-8000 COP\n2. Capuchino-7500 COP\n3. Café latte-7500 COP\n4. Espresso-4000 COP\n5. Americano-5000 COP");

//16.Agregar function a mi código
//function 1:verificar el saldo
function validarSaldo(precioProducto, nombreProducto) {
if (saldo >= precioProducto) {
console.log("Saldo suficiente para comprar " + nombreProducto);
return true;
} else {
    console.log("Saldo insuficiente para comprar " + nombreProducto);
    return false;
    }
}


//Function 2: verificar cantidades de cada producto y preparar
function validarIngredientes(nombreProducto, cafeProducto, lecheProducto, chocolateProducto, azucarProducto) {
if (cafeDisponible >= cafeProducto &&lecheDisponible >= lecheProducto &&chocolateDisponible >= chocolateProducto) {

let respuestaAzucar = prompt("¿Desea agregar azúcar a su " + nombreProducto + "? (sí/no)");
let agregarAzucar = respuestaAzucar &&(respuestaAzucar.toLowerCase() === "sí" ||respuestaAzucar.toLowerCase() === "si");

if (agregarAzucar && azucarDisponible < azucarProducto) 
    {alert("No hay azúcar suficiente. Su café se preparará sin azúcar.");agregarAzucar = false;
        }

// Descontar ingredientes utilizados
cafeDisponible -= cafeProducto;
lecheDisponible -= lecheProducto;
chocolateDisponible -= chocolateProducto;

if (agregarAzucar) {azucarDisponible -= azucarProducto;}
alert("¡Su " + nombreProducto + " está listo!");
return true;
    } else {
    alert("No hay suficientes ingredientes para preparar un " + nombreProducto);
    return false;
    }
}

//Función para realizar una compra
function comprarProducto(nombreProducto, precioProducto, cafeProducto, lecheProducto, chocolateProducto, azucarProducto) {
if (validarSaldo(precioProducto, nombreProducto)) {if (validarIngredientes(nombreProducto, cafeProducto, lecheProducto, chocolateProducto, azucarProducto)) {saldo -= precioProducto;
console.log("Producto comprado: " + nombreProducto);console.log("Precio: $" + precioProducto);
console.log("Saldo restante: $" + saldo);
return true;}
    }
    return false;
}

//17.identificar el producto seleccionado
switch(opcion) {
case "1":
    alert("Ha seleccionado un " + mocachinoNombre + " que cuesta " + mocachinoPrecio + " COP.");
        if (validarSaldo(mocachinoPrecio, mocachinoNombre)) {validarIngredientes(mocachinoNombre, mocachinoCafe, mocachinoLeche, mocachinoChocolate, mocachinoAzucar);
            }
            break;
  
case "2":
    alert("Ha seleccionado un " + capuchinoNombre + " que cuesta " + capuchinoPrecio + " COP.");
        if (validarSaldo(capuchinoPrecio, capuchinoNombre)) {validarIngredientes(capuchinoNombre, capuchinoCafe, capuchinoLeche, 0, capuchinoAzucar);
        }
        break;

case "3":
    alert("Ha seleccionado un " + latteNombre + " que cuesta " + lattePrecio + " COP.");
        if (validarSaldo(lattePrecio, latteNombre)) {validarIngredientes(latteNombre, latteCafe, latteLeche, 0, latteAzucar);
        }
        break;

case "4":
    alert("Ha seleccionado un " + espressoNombre + " que cuesta " + espressoPrecio + " COP.");
        if (validarSaldo(espressoPrecio, espressoNombre)) {validarIngredientes(espressoNombre, espressoCafe, 0, 0, espressoAzucar);
        }
        break;

case "5":
    alert("Ha seleccionado un " + americanoNombre + " que cuesta " + americanoPrecio + " COP.");
        if (validarSaldo(americanoPrecio, americanoNombre)) {validarIngredientes(americanoNombre, americanoCafe, 0, 0, americanoAzucar);
        }
        break;

default:
    alert("Opción de bebida no válida. Por favor seleccione una opción del 1 al 5.");
        break;
}



