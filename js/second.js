//1. Hacer una función que sume todos los números de un arreglo, 
//por ejemplo: `sum([2,4,7])` debe retornar: `13` (la misma xD)

function sum(suma){
  if(suma.length === 1){
    return suma[0]
  } else{
    return suma.pop() + sum(suma) 
  }
}

function sum(suma){
  if(suma.length===1 ){
   return suma[0]
}
  return suma + sum(suma-1)
}



//2. Hacer la sumatoria lineal hasta un límite indicado, 
//es decir: `sumatoria(7)` debe retornar: `28` 
//dado que es el resultado de: (7+6+5+4+3+2+1) (la misma de nuevo)

function sumatoria(limite){
  if (limite.length===1){
    return limite[0]
  }else{
    return limite + sumatoria(limite-1)
  }
}



//3. Hacer una función que me calcule la N iteración de Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, //34, 55, 89... 
//debería poder usarla de la forma: `fib(6)` donde me retorne: `13

function fib(n) {
   if (n < 2){
     return 1
   }else{
     return fib(n-2) + fib(n-1);
   }
}

//4. Calcular la *n* potencia de un número *x*, es decir que si llamo la función: 
//`pow(2,6)` me calcula la sexta potencia de 2, es decir que el resultado debe ser: `64

function pow(n,x){
 	if(x === 0){
 		return 1
 	}else{
  return n * pow(n, x-1)  		
 	}
}




