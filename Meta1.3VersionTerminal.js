let lineasDeCodigoDisponibles = ["a = 1 + 2", "console.log('1+2')", "console.log(a)", "b = 3+4", "console.log('3+4')", "c = 5 + 6", "console.log('5+6')", "console.log(c)"];
let listaDeProcesosAEjecutar = [];
let cantidadDeProcesosAEjecutar = process.argv[2];
//Cantidad maxima de lineas de codigo es 8

function regresarRandom(){
    return Math.floor(Math.random() * 8);
}

function tomarLineasDeCodigo(){
    let valor = regresarRandom();
    return lineasDeCodigoDisponibles[valor];
}

function inicializar(){
    for(let i=0; i<cantidadDeProcesosAEjecutar; i++){
        listaDeProcesosAEjecutar.push(proceso = { id: (i+1), instrucciones: []});
        let valorAleatorio = regresarRandom();
        let identificador = listaDeProcesosAEjecutar[i].id;
        console.log("El proceso: "+identificador+" tendra "+valorAleatorio+" instrucciones");
        for(let j=0; j<valorAleatorio; j++){
            listaDeProcesosAEjecutar[i].instrucciones.push(tomarLineasDeCodigo());            
        }
    }   
}

function estanVacios(){
    let vacios = false;
    let aux = 0;
    for(let i=0; i<cantidadDeProcesosAEjecutar; i++){
        if(listaDeProcesosAEjecutar[i].instrucciones.length==0){
            aux++;
        }
    }
    if(aux==cantidadDeProcesosAEjecutar){
        vacios = true;
    }
    return vacios;
}

function empezarSimulacion(){
    inicializar();
    vacios = false;
    while(!vacios){
        for(let i=0; i<listaDeProcesosAEjecutar.length; i++){
            let numeroDeProceso = listaDeProcesosAEjecutar[i].id;
            console.log("Proceso "+numeroDeProceso);
            if(listaDeProcesosAEjecutar[i].instrucciones.length>0){
            let instruccion = listaDeProcesosAEjecutar[i].instrucciones.shift();
            console.log(instruccion);
            }
            else{
            console.log("Terminado");    
            }
        }
        vacios = estanVacios();
    }
}

if(cantidadDeProcesosAEjecutar>0){
    empezarSimulacion();
}
else{
    console.log("No hay prcoesos que ejecutar");
}