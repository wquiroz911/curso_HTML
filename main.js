function mensaje() {
    alert("Yanbal Test");
}

$(document).ready(onLoadWindow);

window.addEventListener('load', onLoadWindow);

function onLoadWindow(){
    var boton = $("#btnComida");
    boton.on('click',mensaje);
    
    var persona = new objPersona();
    persona.inicializa();
    alert("Nombre: " + persona.getNombre() + 
         " Apellido: " + persona.getApellido() + 
         " Edad " + persona.getEdad());
    
}
