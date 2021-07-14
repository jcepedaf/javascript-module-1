//let names1 = ["Pedro","Sofia","Matias","Maria","Wendy"];
let names2 = ["Juan","Tomas","Victoria","Jesus","Ramon"];

const encontrarName = (arr) => arr.find(name => (name === "Jesus") ? console.log("Found me!") : console.log("Haven't found me :(") );

encontrarName(names2);