const ingresos = [
    new Ingreso('Sueldo', 2100),
    new Ingreso('Venta de coche', 1500)
];

const egresos =[
    new Egreso('Renta de apartamento', 900),
    new Egreso('Ropa', 500)
];

const cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

const totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

const cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style: 'percent', minimumFractionDigits:1});
}

const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresosHTML = 
    `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                            onclick='eliminarIngreso(${ingreso.idIngreso})'></ion-icon>
            </button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === id);
    console.log(indiceEliminar);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso)=>{
    let egresosHTML = 
    `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
                    <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                    <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                         <ion-icon name="close-circle-outline"
                                    onclick='eliminarEgreso(${egreso.idEgreso})'></ion-icon>
                    </button>
            </div>
        </div>
    </div>
    `;
    return egresosHTML;
}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.idEgreso === id);
    console.log(indiceEliminar);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = ()=>{
    let formulario = document.forms['forma'];
    let tipo = formulario['tipo'];
    let descripcion = formulario['descripcion'];
    let valor = formulario['valor'];
    if(descripcion.value.trim() !== '' && valor.value.trim() !== ''){
        if(tipo.value === 'ingreso'){
             ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
             cargarCabecero();
             cargarIngresos();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}