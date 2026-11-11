// 1. Saldo del usuario
let saldo = 0;

// 2. Inventario inicial de la máquina
const cafeDisponible = 500//gramos
const lecheDisponible = 2000;//mililitros
const chocolateDisponible = 300;//gramos
const azucarDisponible = 500;//gramos

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
const americanoAgua = 120; // mililitros de agua por porción
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
    consologe.log("Saldo suficiente");
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
    consologe.log("Saldo suficiente");
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
    consologe.log("Saldo suficiente");
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
    consologe.log("Saldo suficiente");
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
    consologe.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//14.comprobar ingredientes del americano
if (cafeDisponible >= americanoCafe && aguaDisponible>=americanoAgua && azucarDisponible >= americanoAzucar) {
    console.log("Hay suficientes ingredientes para preparar un americano");
} else {
    console.log("No hay suficientes ingredientes para preparar un americano");
}

//15.menú de la máquina de café
let opcion = prompt("Bienvenido a la máquina de café. Por favor seleccione una opción: \n1. Mocachino-8000 COP\n2. Capuchino-7500 COP\n3. Café latte-7500 COP\n4. Espresso-4000 COP\n5. Americano-5000 COP");

//16.Agregar function a mi código
//function 1:verificar el saldo
function validarSaldo(precioProducto, nombreProducto) {
    console.log(precioProducto)
    saldo = Number(prompt("Por favor ingrese el valor de dinero de la bebida que desea"))
    let mensaje;

    if (saldo >= precio) {
        alert("Saldo suficiente para comprar un " + nombreProducto + ".");
        
    } else {
        alert("Saldo insuficiente para comprar un " + nombreProducto + ".");
        
    }

    return mensaje;
}



//17.identificar el producto seleccionado
switch(opcion) {
    case "1":
        nombreProducto = mocachinoNombre;
        precioProducto = mocachinoPrecio;
        cafeProducto = mocachinoCafe;
        lecheProducto = mocachinoLeche;
        chocolateProducto = mocachinoChocolate;
        azucarProducto = mocachinoAzucar;
        console.log("Ha seleccionado un " + nombreProducto + " que cuesta " + precioProducto + " COP.");
        //verificar el dinero
        if (saldo >= mocachinoPrecio) {
            console.log("Saldo suficiente para comprar un mocachino.");
        } else {
            console.log("Saldo insuficiente para comprar un mocachino.");
        }
        //verificar los ingredientes
        if (cafeDisponible >= mocachinoCafe && lecheDisponible >=mocachinoLeche && chocolateDisponible >=mocachinoChocolate && azucarDisponible >= mocachinoAzucar) {
            console.log("Hay suficientes ingredientes para preparar un mocachino.");
        } else {
            console.log("No hay suficientes ingredientes para preparar un mocachino.");
        }
        // Preguntar si desea agregar azúcar
        let respuestaAzucar = prompt('¿Desea agregar azúcar a su ' + nombreProducto + '? (sí/no)');
        if (  respuestaAzucar &&  (respuestaAzucar.toLowerCase() === 'sí' || respuestaAzucar.toLowerCase() === 'si')) {
  break; }
    case "2":
        nombreProducto = capuchinoNombre;
        precioProducto = capuchinoPrecio;
        cafeProducto = capuchinoCafe;
        lecheProducto = capuchinoLeche;
        azucarProducto = capuchinoAzucar;
        console.log("Ha seleccionado un " + nombreProducto + " que cuesta " + precioProducto + " COP.");
        //verificar el dinero
        if (saldo >= capuchinoPrecio) {
            console.log("Saldo suficiente para comprar un capuchino.");
        } else {
            console.log("Saldo insuficiente para comprar un capuchino.");
        }
        //verificar los ingredientes
        if (cafeDisponible >= capuchinoCafe && lecheDisponible >=capuchinoLeche && azucarDisponible >= capuchinoAzucar) {
            console.log("Hay suficientes ingredientes para preparar un capuchino.");
        } else {
            console.log("No hay suficientes ingredientes para preparar un capuchino.");
        }
        // Preguntar si desea agregar azúcar
        let respuestaAzucar = prompt('¿Desea agregar azúcar a su ' + nombreProducto + '? (sí/no)');
        if (  respuestaAzucar &&  (respuestaAzucar.toLowerCase() === 'sí' || respuestaAzucar.toLowerCase() === 'si')) {
    break;}
    case "3":
        nombreProducto = latteNombre;
        precioProducto = lattePrecio;
        cafeProducto = latteCafe;
        lecheProducto = latteLeche;
        azucarProducto = latteAzucar;
        console.log("Ha seleccionado un " + nombreProducto + " que cuesta " + precioProducto + " COP.");
        //verificar el dinero
        if (saldo >= lattePrecio) {
            console.log("Saldo suficiente para comprar un café latte.");
        } else {
            console.log("Saldo insuficiente para comprar un café latte.");
        }
        //verificar los ingredientes
        if (cafeDisponible >= latteCafe && lecheDisponible >=latteLeche && azucarDisponible >= latteAzucar) {
            console.log("Hay suficientes ingredientes para preparar un café latte.");
        } else {
            console.log("No hay suficientes ingredientes para preparar un café latte.");
        }
        // Preguntar si desea agregar azúcar
        let respuestaAzucar = prompt('¿Desea agregar azúcar a su ' + nombreProducto + '? (sí/no)');
        if (  respuestaAzucar &&  (respuestaAzucar.toLowerCase() === 'sí' || respuestaAzucar.toLowerCase() === 'si')) {
    break;}
    case "4":
        nombreProducto = espressoNombre;
        precioProducto = espressoPrecio;
        cafeProducto = espressoCafe;
        azucarProducto = espressoAzucar;
        console.log("Ha seleccionado un " + nombreProducto + " que cuesta " + precioProducto + " COP.");
        //verificar el dinero
        if (saldo >= espressoPrecio) {
            console.log("Saldo suficiente para comprar un espresso.");
        } else {
            console.log("Saldo insuficiente para comprar un espresso.");
        }
        //verificar los ingredientes
        if (cafeDisponible >= espressoCafe && azucarDisponible >= espressoAzucar) {
            console.log("Hay suficientes ingredientes para preparar un espresso.");
        } else {
            console.log("No hay suficientes ingredientes para preparar un espresso.");
        }
        // Preguntar si desea agregar azúcar
        let respuestaAzucar = prompt('¿Desea agregar azúcar a su ' + nombreProducto + '? (sí/no)');
        if (  respuestaAzucar &&  (respuestaAzucar.toLowerCase() === 'sí' || respuestaAzucar.toLowerCase() === 'si')) {
    break;}
    case "5":
        nombreProducto = americanoNombre;
    precioProducto = americanoPrecio;
    cafeProducto = americanoCafe;
    aguaProducto = americanoAgua;
    azucarProducto = americanoAzucar;
    console.log("Ha seleccionado un " + nombreProducto + " que cuesta " + precioProducto + " COP.");
    //verificar el dinero
    if (saldo >= americanoPrecio) {
        console.log("Saldo suficiente para comprar un americano.");
    } else {
        console.log("Saldo insuficiente para comprar un americano.");
    }
    //verificar los ingredientes
    if (cafeDisponible >= americanoCafe && aguaDisponible >= americanoAgua && azucarDisponible >= americanoAzucar) {
        console.log("Hay suficientes ingredientes para preparar un americano.");
    } else {
        console.log("No hay suficientes ingredientes para preparar un americano.");
    }
    // Preguntar si desea agregar azúcar
        let respuestaAzucar = prompt('¿Desea agregar azúcar a su ' + nombreProducto + '? (sí/no)');
        if (  respuestaAzucar &&  (respuestaAzucar.toLowerCase() === 'sí' || respuestaAzucar.toLowerCase() === 'si')) {
  break;}
    default:
        console.log("Opción no válida. Por favor seleccione una opción del 1 al 5.");
}


