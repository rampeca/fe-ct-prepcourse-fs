function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    var bandera=0;
    if(num>1){
        for(var i=2;i<num;i++){
            if(num%i==0){
                console.log(i);
                bandera=1;
            }
        }
        console.log('La bandera es: '+bandera);
        if(bandera===0){
            console.log(true);
            return true;
        }else{
            console.log(false);
            return false;
        }
    }else{
        console.log('La bandera es: '+bandera);
        console.log(false);
        return false;
    }
 }

 esPrimo(7);