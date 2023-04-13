function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var tnum=num.toString();
   var ntnum=tnum.split('');
   if(ntnum[0]=='9' || ntnum[0]==9)
      return true;
   else
      return false;
   
}

console.log(empiezaConNueve(-5));