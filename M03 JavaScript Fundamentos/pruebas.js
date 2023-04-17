/* archivo para realizar pruebas de código */

function mayorMenor(numeros){
    var nArr=[];
    var arrOrd=[];
    var Resultado=[];
    numeros.forEach((element) => {
        console.log(typeof(element));
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
                    console.log(element);
                    var arrInt=element;
                    var tam=arrInt.length;
                    var numEnto;
                    for(var i=0; i<tam; i++){
                        console.log(element[i]);
                        numEnto=parseInt(element[i]);
                        if(numEnto!='NaN'){
                            nArr.push(numEnto);
                        }
                    }
                }
            }
        }
    });
    console.log(nArr);
    arrOrd=nArr.sort(function(a,b){return a - b});
    //nArr=numeros.sort(function(a,b){return a - b});
    Resultado.push(nArr.pop());
    Resultado.push(nArr.shift());

    return Resultado;
}

console.log(mayorMenor([3,6,4,['43',34],21,8]));

//[3,6,2,8,5,[5,9,56,4,32]]