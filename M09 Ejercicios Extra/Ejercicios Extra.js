/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
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

function numberOfCharacters(string) {
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

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var tam=string.length;
   var newstring=[];
   for(var i=0; i<tam; i++){
      if(esMayuscula(string[i]))
         newstring.push(string[i]);
   }

   for(var i=0; i<tam; i++){
      if(esMinuscula(string[i]))
         newstring.push(string[i]);
   }

   function esMayuscula(letra)
   {
      if(letra === letra.toUpperCase())
         return true;
      else  
         return false;
   }

   function esMinuscula(letra)
   {
      if(letra === letra.toLowerCase())
         return true;
      else 
         return false;
   } 

   return newstring=newstring.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   String.prototype.reverse=function(){
      var StringRev;
      var StrToArr=[];
      var ArregloRev=[];
      StrToArr=this.split('');
      for(var i=StrToArr.length-1; i>=0; i--){
         ArregloRev.push(StrToArr[i]);
      }
      StringRev=ArregloRev.join('');
      return StringRev;
   }

   var FraseDes=frase.split(' ');
   var tam = FraseDes.length;
   var palInv,FRaseInv;
   for(var i=0; i<tam;i++){
      palInv=FraseDes[i].reverse();
      if(i==0){
         FRaseInv=palInv;
      }else{
         FRaseInv=FRaseInv + ' ' + palInv;
      }
   }
   return FRaseInv;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   String.prototype.reverse=function(){
      var StringRev;
      var StrToArr=[];
      var ArregloRev=[];
      StrToArr=this.split('');
      for(var i=StrToArr.length; i>=0; i--){
         ArregloRev.push(StrToArr[i]);
      }
      StringRev=ArregloRev.join('');
      return StringRev;
   }

   var stnum=numero.toString();
   var strcap=stnum.reverse();

   if(stnum===strcap)
      return 'Es capicua';
   else
      return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrStr, NewStr=[];
   arrStr=string.split('');
   for(var i=0; i<arrStr.length; i++){
      if(arrStr[i]!='a' && arrStr[i]!='b' && arrStr[i]!='c')
         NewStr.push(arrStr[i]);
   }
   NewStr=NewStr.join('');
   return NewStr;
}

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

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var tam1,tam2;
   var nArr=[];
   tam1=array1.length;
   tam2=array2.length;
   for(var i=0; i<tam1; i++){
      for(var j=0; j<tam2; j++){
         if(array1[i]===array2[j])
            nArr.push(array1[i]);
      }
   }
   return nArr.sort(function(a,b){return a -b});
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
