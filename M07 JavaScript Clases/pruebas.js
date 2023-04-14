/*function Auto(puertas,color,marca,año,ruedas){
    this.puertas=puertas;
    this.color=color;
    this.marca=marca;
    this.año=año;
    this.ruedas=ruedas;

    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    };
}

var miPrimerAuto=new Auto(2,"Rojo","Ferrari",2018,4);

miPrimerAuto.informacion();*/

//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

/*class Auto {
    constructor(puertas,color,marca,año,ruedas){
        this.puertas=puertas;
        this.color=color;
        this.marca=marca;
        this.año=año;
        this.ruedas=ruedas;
    }
    informacion(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
}

var miSegundoAuto=new Auto(4,"Blanco","Fiat",2015,4);

miSegundoAuto.informacion();*/

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);

// Prototipos
/*Array.prototype.mayoresQueTres = function (){
    var arregloModificado=[];
    for (let i = 0; i < this.length; i++) {
        if(this[i] > 3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }       
    }
    return arregloModificado;
};

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo);*/

/*class LatinoAmerica {
    constructor(){
        this.paises=[];
    }
}

LatinoAmerica.prototype.agregarPais = function (pais){
    this.paises.push(pais);
};

var continente= new LatinoAmerica();
continente.agregarPais('Mexico');
console.log(continente.paises);*/

/*class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Hola mi nombre es ' + this.nombre + '. Tengo '+ this.edad);
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre,edad);
        this.añosDeExperiencia=añosDeExperiencia;
    }

    codear(){
        console.log('Soy ' + this.nombre + '. Codeo desde hace ' + this.añosDeExperiencia + ' añoS.');
    }
}

var carlos = new Persona('Carlos',40);
var programador = new Programador('María',37,4);
carlos.saludar();
programador.codear();
programador.saludar();*/

class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre,apellido,edad,domicilio){
       this.nombre=nombre;
       this.apellido=apellido;
       this.edad=edad;
       this.domicilio=domicilio;
    }
    detalle(){
       var detPersona={
          nombreP: this.nombre, apellidoP: this.apellido, edadP: this.edad, domicilioP: this.domicilio 
       }
       return detPersona;
    }
 }

 function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    Persona.prototype.datos=function(){
        var mensaje;
        mensaje = this.nombre + ', ' + this.edad + ' años';
        return mensaje;
     };
    return Persona;
 }

 agregarMetodo();
 const persona = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
 //persona.nombre === 'Juan' && persona.edad === 22

 console.log(persona.datos());