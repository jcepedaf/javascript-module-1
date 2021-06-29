let estudiantes = 15;
let profesores = 8;
let total = estudiantes + profesores ;

let porcentajEstudiantes = (estudiantes/total)*100;

let porcentajEstudiantes1 = Math.round(porcentajEstudiantes);
let porcentajProfesores = 100 - porcentajEstudiantes1;

console.log("porcentaje estudiantes = " + porcentajEstudiantes1);
console.log("porcentaje profesores = " + porcentajProfesores );

