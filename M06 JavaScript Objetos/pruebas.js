function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto[propiedad]=null;
    return objeto;

 
 }

 const object = {
    x: 1,
    y: 2,
 };

 console.log(agregarPropiedad(object, 'z'));
 //crearGato('Snowball', 1).nombre;