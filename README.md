Análisis de las variables
Variables de saldo e inventario:
*Saldo*
Tipo de variable: saldo del usuario
Tipo de dato: number
Unidad: pesos colombianos 
Descripción: almacena el dinero ingresado por el usuario.

*Cafédisponible*
Tipo de variable: inventario
tipo de dato: number
unidad: gramos(g)
Descripción: representa la cantidad total de café disponible

*Lechedisponible*
Tipo de variable: Inventario
Tipo de dato: number
Unidad: mililitros(ml)
descripción: representa la cantidad total de leche disponible

*Chocolatedisponible*
Tipo de variable: inventario
Tipo de dato: Number
Unidad: gramos(g)
Descripción: representa la cantidad total de chocolate disponible

*Azúcardisponible*
ipo de variable: inventario
Tipo de dato: Number
Unidad: gramos (g)
Descripción: representa la cantidad total de azúcar disponible

Variables del Mocachino
*mocachino*
Tipo de variable:Mocachino
Tipo de dato: String
Descripción: almacena el nombre de la bebida

*Preciomocachino*
Tipo de variable: precio
Tipo de dato: Number
Unidad: COP
Descripción: representa el precio de venta del Mocachino

*cafeMocachino, lecheMocachino y chocolateMocachino*
Tipo de variable: cantidades de la receta
Tipo de dato: Number
Unidad: gramos para el café y el chocolate, mililitros para la leche
Descripción: indican cuánto de cada ingrediente se necesita para preparar un Mocachino

Variables del Capuchino
*Capuchino*
Tipo de variable: nombre del producto
Tipo de dato: String
Descripción: almacena el nombre de la bebida

*precioCapuchino*
Tipo de variable: precio
Tipo de dato: Number
Unidad: COP
Descripción: representa el precio del Capuchino

*cafeCapuchino y lecheCapuchino*
Tipo de variable: cantidades de la receta
Tipo de dato: Number
Unidad: gramos para el café y mililitros para la leche
Descripción: indican las cantidades necesarias para preparar un Capuchino

 Variables del Café latte
*caféLatte*
Tipo de variable: nombre del producto
Tipo de dato: String
Descripción: almacena el nombre de la bebida

*precioLatte*
Tipo de variable: precio
Tipo de dato: Number
Unidad: COP
Descripción: representa el precio del Café latte

*cafeLatte y lecheLatte*
Tipo de variable: cantidades de la receta
Tipo de dato: Number
Unidad: gramos para el café y mililitros para la leche
Descripción: indican las cantidades necesarias para preparar un Café latte

Variables del Expresso
*Expresso*
Tipo de variable: nombre del producto
Tipo de dato: String
Unidad: no aplica
Descripción: almacena el nombre de la bebida

*precioExpresso*
Tipo de variable: precio
Tipo de dato: Number
Unidad: COP
Descripción: representa el precio del Espresso

*cafeExpresso*
Tipo de variable: cantidad de la receta
Tipo de dato: Number
Unidad: gramos (g)
Descripción: indica la cantidad de café necesaria para preparar un Espresso

Variables del Americano
*Americano*
Tipo de variable: nombre del producto
Tipo de dato: String
Descripción: almacena el nombre de la bebida

*precioAmericano*
Tipo de variable: precio
Tipo de dato: Number
Unidad: COP
Descripción: representa el precio del Americano

*cafeAmericano y aguaAmericano*
Tipo de variable: cantidades de la receta
Tipo de dato: Number
Unidad: gramos para el café y mililitros para el agua
Descripción: indican las cantidades necesarias para preparar un Americano, el agua se utiliza en la receta, pero no se controla como inventario.

Se proponen las siguientes cantidades para iniciar el funcionamiento de la maquina:
* Café: 500 g
* Leche: 2.000 ml
* Chocolate: 300 g
* Azúcar: 500 g
* Saldo inicial: $0 COP

Productos y recetas:
Producto 1: Mocachino
* Café: 18 g.
* Leche: 150 ml.
* Chocolate: 20 g.
* Precio: $8.000 COP.

Producto 2: Capuchino
* Café: 18 g.
* Leche: 120 ml.
* Precio: $7.000 COP.

Producto 3: Café latte
* Café: 18 g.
* Leche: 200 ml.
* Precio: $7.500 COP.

Producto 4: Espresso
* Café: 18 g.
* Precio: $4.000 COP.

Producto 5: Americano
* Café: 18 g.
* Agua caliente: 120 ml.
* Precio: $5.000 COP.

El azúcar se considerará un ingrediente disponible para uso opcional, pero no se incluye como consumo obligatorio en las recetas.
