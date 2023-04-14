/*
function devuelvoUsuario() {
   return 'CAMILO';
}
function devuelvoSaludo() {
   return 'Hola';
}
function saludar(cb1, cb2) {
   return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

////////////////////////////

var devuelvoFrase = function (comida){
    return 'Hoy quiero comer: ' + comida;
};

var hablar = function (comida, cb){
    return cb(comida);
};

var fraseFinal = hablar("Pizza", devuelvoFrase);
console.log(fraseFinal);
*/

function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
    var Nom2Cad;
    var NombreMod;
    Nom2Cad=nombre.split('');
    Nom2Cad[0]=Nom2Cad[0].toUpperCase();
    NombreMod=Nom2Cad.join('');
    return NombreMod;
 }

 console.log(mayuscula('mario'));