const calcularEdad = (arr) => arr.map(name => 2021 - name);

let fechasNacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let edades = calcularEdad(fechasNacimiento);

console.log(edades);