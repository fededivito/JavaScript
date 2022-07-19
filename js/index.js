var parcial,final,promedio;
	parcial = parseFloat(prompt("Parcial"));
	final = parseFloat(prompt("Final"));
	promedio = (parcial+final)/2;

	if(promedio >= 10.5){
		console.log("El promedio es "+promedio+" APROBADO");
	}else{
		console.log("El promedio es "+promedio+" DESAPROBADO");
	}
