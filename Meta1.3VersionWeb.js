let lineasDeCodigoDisponibles = ["a = 1 + 2", "console.log('1+2')", "console.log(a)", "b = 3+4", "console.log('3+4')", "c = 5 + 6", "console.log('5+6')", "console.log(c)"];
let listaDeProcesosAEjecutar = [];
let cantidadDeProcesosAEjecutar = prompt("Ingrese la cantidad de procesos que ejecutara: ");
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
        document.write("El proceso: "+identificador+" tendra "+valorAleatorio+" instrucciones <br/>");
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
            document.write("Proceso "+numeroDeProceso+ "<br/>");
            if(listaDeProcesosAEjecutar[i].instrucciones.length>0){
            let instruccion = listaDeProcesosAEjecutar[i].instrucciones.shift();
            document.write(instruccion +"<br/>");
            }
            else{
                document.write("Terminado <br/>");    
            }
        }
        vacios = estanVacios();
    }
}
empezarSimulacion();