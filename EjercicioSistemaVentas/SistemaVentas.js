class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `ID Producto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUTOS){
            this._productos.push(producto);
            this._contadorProductosAgregados++;
        }else{
            console.log("No se pueden agregar más productos.");
        }
    }

    calcularTotal(){
         let totalVenta = 0;
         for(let producto of this._productos){
             totalVenta += producto.precio;
         }
         return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

}

let producto1 = new Producto('Pantalon', 200);
let prodcuto2 = new Producto('Camisa', 100);
let prodcuto3 = new Producto('Cinturon', 50);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(prodcuto2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(prodcuto3);
orden2.agregarProducto(prodcuto2);
orden2.agregarProducto(prodcuto3);
orden2.agregarProducto(prodcuto2);
orden2.agregarProducto(prodcuto2);
orden2.mostrarOrden();