let miPromesa = new Promise((resolve, rejected)=>{
    let expresion = true;
    if(expresion){
        resolve('Resolvió correcto');
    }else{
        rejected('Se produjo un erro');
    }
});

// miPromesa.then( valor => console.log(valor),error => console.log(error) );
// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolve) =>{
    //console.log('Inicio promesa');
    setTimeout(()=>resolve('Saludos con promesas y timeout'),3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));

//Async indica que la funcion de regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}

// miFuncionConPromesa().then(valor => console.log(valor));

async function miFuncionConPromesaAwait(){
    let miPromesa = new Promise((resolve =>{
        resolve('Promesa con await...');
    }));

    console.log(await miPromesa);
}

// miFuncionConPromesaAwait();

//SetTimeout con async y await

async function miFuncionConPromesaAwaitTimeout(){
    console.log('Inicion de funcion');
    let miPromesa = new Promise((resolve)=>{
        setTimeout(()=>resolve('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la funcion');
}

miFuncionConPromesaAwaitTimeout();