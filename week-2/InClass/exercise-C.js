let n = 20;

function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker(n));

//Este codigo lo que hace es comparar si el parametro num de la funcion numberChecker es mayor que 20, igual que 20,
// menor que 20 y si no es un numero y imprime en pantalle el resultado de la comparacion
//para el ejemplo de n=20 el resultado es: 20 is equal to 20
