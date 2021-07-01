function calculaPorcentaje(estudiantes,profesores){// declaro funcion que calcula porcentaje de estudiantes con valor redondeado

let total = estudiantes + profesores ;//sumo estudiantes mas profesores
let porcentajEstudiantes = (estudiantes/total)*100;//saco porcentaje de estudiantes
let porcentajEstudiantes1 = Math.round(porcentajEstudiantes);//redondeo a un numero entero el resultado
return porcentajEstudiantes1;//retorno porcentaje de estudiantes redondeado

}

function imprimeMensaje(a,b){//declaro funcion que recibe parametros a y b que imprime porcentaje de estudiantes y profesores

let imprimir = calculaPorcentaje(a,b);//llamo funcion que calcula porcentaje de estudiante y le paso parametros a y b
let mensaje = `El porcentaje  de estudiantes es ${imprimir}%`;//creo mensaje
let mensaje1 = `El porcentaje  de profesores es `+(100-imprimir)+`%`;//creo mensaje1
console.log(mensaje);//imprimo porcentaje de estudiantes
console.log(mensaje1);//imprimo porcentaje de profesores

}

console.log("Para estudiantes 15 y profesores 8");//indico que para valores de estudiantes 15 y profesores 8
imprimeMensaje(15,8);//llamo funcion que imprime mensaje de porcentaje de estudiantes y profesores
