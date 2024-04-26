console.log("page loaded...");
let eliminarTod = document.querySelector('#todd');
let eliminarPhil = document.querySelector('#phil');
let eliminando = eliminarTod;
function eliminarSolicitud(){
    eliminando.remove();

    if(eliminando === eliminarTod){
        eliminando = eliminarPhil;
    }else{
        eliminando = eliminarTod;
    }

    let cantidadActual = document.querySelector('.badge');
    let cantidadActualizado = Number(cantidadActual.textContent);
    cantidadActualizado--;
    cantidadActual.textContent = cantidadActualizado;
}
let nombre = document.querySelector('.nombre');

function cambioNombre(){
    nombre.innerHTML = "Nombre Default";
}

function aceptarSolicitud(){
    let cantidadActual = document.querySelector('.badge-conex');
    let cantidadActualizado = Number(cantidadActual.textContent);
    cantidadActualizado++;
    cantidadActual.textContent = cantidadActualizado;
}