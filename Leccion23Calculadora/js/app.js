function sumar(){
    const forma = document.getElementById('forma');
    let opA = forma['opA'];
    let opB = forma['opB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}