function exponential(number) { //funcion que calcula el exponecial de un numero
  return number * number;
}

function isEven(number) { // funcion que devuelve un numero si este es par
  return number % 2 === 0;
}

for (let a = 5; a <= 20; a++) { // funcion que itera o cuenta entre 5 y 20
  if (isEven(a)) {
    console.log("The exponential of " + a + " is " + exponential(a));
  }
}
