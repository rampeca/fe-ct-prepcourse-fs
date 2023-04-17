/* archivo para realizar pruebas de código */

function mayorMenor(numeros){
    var nArr=[];
    var arrOrd=[];
    var Resultado=[];
    numeros.forEach((element) => {
        if(typeof(element)==='number'){
            nArr.push(element);
        }else{
            if(typeof(element)==='string'){
                var numEnt=parseInt(element);
                if(numEnt!='NaN'){
                    nArr.push(numEnt);
                }
            }else{
                if(typeof(element)==='object'){
                    var arrInt=element;
                    var tam=arrInt.length;
                    var numEnto;
                    for(var i=0; i<tam; i++){
                        numEnto=parseInt(element[i]);
                        if(numEnto!='NaN'){
                            nArr.push(numEnto);
                        }
                    }
                }
            }
        }
    });
    arrOrd=nArr.sort(function(a,b){return a - b});
    Resultado.push(nArr.pop());
    Resultado.push(nArr.shift());

    return Resultado;
}

console.log(mayorMenor([3,6,4,['43',34],21,8]));
