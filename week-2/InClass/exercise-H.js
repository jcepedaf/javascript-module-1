function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let a=5; a <= 20 ; a++){
  if(isEven(a)) {
  

  console.log("The exponential of " + a +" is " + exponential(a));

  }
}