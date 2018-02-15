function objPersona() {
    var nombre;
    var apellido;
    var edad;
    this.getNombre = function() { return nombre; }
    this.getApellido = function() { return apellido; }
    this.getEdad = function() { return edad; }
    
    this.calza = 100; /* Variable global*/
    
    this.inicializa = function() {
        nombre = "Wilder";
        apellido = "Quiroz";
        edad = 46;
    }
    
}