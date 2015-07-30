//1. Hacer una función que recibe un arreglo de números y debe retornar un objeto con el máximo y el mínimo, por ejemplo: `maxMin([3,6,2,30,8])` debe retornar: `{max: 30, min: 2}`
//lògica: un arreglo de números por los cuales se itera ; se guardan temporalmente en una
//variable, donde lo que fija su permanencia allí ,es una condición. Si el número es menor que el
//anterior, se almacena en esa variable, asì sucesivamente hasta encontrar el menor. 
// en otra variable, se almacena en valor del nùmero mayor, que resultó de ir reemplazando la variable
//temporal. 
// se imprime. 

function maxMin( arreglo ){
	var min= arreglo[0]
	var max= arreglo[0]
	for (var i = 1; i < arreglo.length; i++) {
		if (max < arreglo[i]){
				max = arreglo[i] 
		}
		if(min > arreglo[i]){
				min= arreglo[i]
		}
	}
	return {"min": min , "max": max}
}


//2. Hacer una función que sume todos los números de un arreglo, 
//por ejemplo: `sum([2,4,7])` debe retornar: `13`

function sum(suma){
	var total = 0 
	for(var i=0; i<suma.length; i++){
		total += suma[i]
	}	
	return total
}	

//3. Hacer una función que calcule el promedio de un arreglo de notas de estudiantes, 
//por ejemplo: 
//`promedio([{nombre: 'Pedro', nota: 4}, {nombre: 'Juan', nota: 5}, 
//{nombre: 'Natalia', nota: 3}])` debe retornar: `4`



function promedio(notas){	
	var promedio = 0
	for (var i = 0; i < notas.length; i++) {
		promedio+= notas[i].nota/notas.length 
	
	}
	return promedio
}

//4. Hacer la sumatoria lineal hasta un límite indicado, 
//es decir: `sumatoria(7)` debe retornar: `28` dado que es el resultado de: 
//(7+6+5+4+3+2+1)


function sumatoria(limite){
	var inicio= 1 
	var total= 0
	for (var i = inicio; i <= limite; i++) {
   		total += i
	}	
	return total
}


// var inicio= 1 
// 	var limite = 10
// 	var total= 0
// 	for (var i = inicio; i <= limite; i++) {
//    		total += i
//      }

// console.log(total)	