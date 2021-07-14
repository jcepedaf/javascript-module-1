let people = ["Jesús","María","Juan","Pedro","José"]

console.log("Listado de personas en la mesa: "+ people.join(" ,")+" y la cantidad de personas son: " +people.length );

let people1Mesa2 = "Irina";
let people2Mesa2 = "Ramón";

people.unshift(people1Mesa2);
people.push(people2Mesa2);

console.log("Listado actualizado de personas en la mesa: "+ people.join(" ,")+" y la cantidad de personas son: " +people.length );