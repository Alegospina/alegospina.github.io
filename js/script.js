//1. Hacer una función que recibe un arreglo de números y debe retornar un objeto con el máximo y el mínimo, por ejemplo: `maxMin([3,6,2,30,8])` debe retornar: `{max: 30, min: 2}`
//lògica: un arreglo de números por los cuales se itera ; se guardan temporalmente en una
//variable, donde lo que fija su permanencia allí ,es una condición. Si el número es menor que el
//anterior, se almacena en esa variable, asì sucesivamente hasta encontrar el menor. 
// en otra variable, se almacena en valor del nùmero mayor, que resultó de ir reemplazando la variable
//temporal. 
// se imprime. 

function maxMin(){
	var arreglo= [7,8,6,5,4,5,7,8,6,7]
	var temp = arreglo[i]
	var min= temp
	var max= 
		for (var i=0; i<arreglo.length; i++){
			if (min < temp){
				var min=temp
			}else{
				var min= 
		}
	}
			
console.log(min,max)
}




//2. Hacer una función que sume todos los números de un arreglo, por ejemplo: `sum([2,4,7])` debe retornar: `13`

function sumaNumeros(){
	var suma= [9,8,7,6,7,8,89,3,44,55,66,77]
	var total = 0 
	for(var i=0; i<suma.length; i++){
		total += suma[i]
	}	
}	
console.log(total)

//3. Hacer una función que calcule el promedio de un arreglo de notas de estudiantes, por ejemplo: `promedio([{nombre: 'Pedro', nota: 4}, {nombre: 'Juan', nota: 5}, {nombre: 'Natalia', nota: 3}])` debe retornar: `4



function notasEstudiantes(){
	var notas = [{nombre: "Natalia", nota: 4},{Nombre: "Ale", nota:3},{Nombre:"Daniel", nota:5},{Nombre: "Esteban", nota:2}]	
	var promedio = 0
	for (var i = 0; i < notas.length; i++) {
		promedio+= notas[i].nota/notas.length 
	
	}
}
console.log(promedio)	
