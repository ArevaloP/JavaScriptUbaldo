class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `    Raton: {idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `    Teclado: {idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `    Monitor: {idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}}`;
    }
}

class Computador{
    static contadorComputadores = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputador = ++Computador.contadorComputadores;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `  Computador ${this._idComputador}: ${this._nombre} \n${this._monitor}, \n${this._raton}, \n${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadores = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputador(computador){
        this._computadores.push(computador);
    }

    mostrarOrden(){
        let computadoresOrden = '';
        for(let computador of this._computadores){
            computadoresOrden += `\n${computador}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadores: ${computadoresOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'Apple';

let teclado1 = new Teclado('USB', 'DMI');
let teclado2 = new Teclado('Bluetooth', 'Dell');

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);

let computador1 = new Computador('Armada', monitor1, raton1, teclado1);
let computador2 = new Computador('Gamer', monitor2, raton2, teclado2);

let orden1 = new Orden();
orden1.agregarComputador(computador1);
orden1.agregarComputador(computador2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputador(computador2);
orden2.agregarComputador(computador1);
orden2.agregarComputador(computador1);
orden2.mostrarOrden();