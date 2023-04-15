/*function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    var NuevoArray=[];
    var it=0;
    for(let prop in objeto){
        NuevoArray.push([prop,objeto[prop]]);
    }
    return NuevoArray;
 }

 console.log(deObjetoAarray({ x: 1, y: 2 }));*/

 /*function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var tam=string.length;
    var nstring;
    var obj={};
    nstring=string.split('');
    nstring=nstring.sort();
    nstring=nstring.join('');
    var suma=1;
    for(var i=0; i<tam; i++){
        if(nstring[i]===nstring[i+1]){
            suma++;
        }else{
            obj[nstring[i]]=suma;
            suma=1;
        }
    }
    return obj;
 }

 console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'));*/

 function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    var tam=arrayOfStrings.length;
    var arrtam1,arrtam2,temp,temp1,temp2;
    for(var j=0; j<tam; j++){
        for(var i=0; i<tam; i++){
            if(i<tam-1){
                temp1=arrayOfStrings[i].split('');
                temp2=arrayOfStrings[i+1].split('');
                arrtam1=temp1.length;
                arrtam2=temp2.length;
                if(arrtam1<=arrtam2){
                    //newarr[i]=arrayOfStrings[i];
                }else{
                    temp=arrayOfStrings[i];
                    arrayOfStrings[i]=arrayOfStrings[i+1];
                    arrayOfStrings[i+1]=temp;
                }
            }else{
                break;
            }
        }
    }
    return arrayOfStrings;
 }

 console.log(sortArray(['pera', 'manzana', 'alcaucil', 'papa']));