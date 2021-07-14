const calcularEdad = (arr) => arr.map(name => 2021 - name);

let fechasNacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let edades = calcularEdad(fechasNacimiento);

let canDrive = (arr) => arr.map(name =>name >= 17 ? console.log("Born in "+(2021-name)+" can drive") : console.log("Born in "+(2021-name)+" can drive in "+(17-name)+" years"));

canDrive(edades);

