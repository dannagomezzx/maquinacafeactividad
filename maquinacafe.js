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

//10.comprobar saldo

if (saldo >= mocachinoPrecio){
    consologe.log("Saldo suficiente");
} else {
    console.log("saldo insuficiente");
}

//11.comprobar ingredientes
if (cafeDisponible >= mocachinoCafe && 
    lecheDisponible >=mocachinoLeche &&
chocolateDisponible >=mocachinoChocolate &&
azucarDisponible >= mocachinoAzucar) {
    console.log("ingredientes suficientes");
} else {
    console.log("ingredientes insuficientes");
}