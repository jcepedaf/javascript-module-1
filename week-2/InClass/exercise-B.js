//actividad 1: en node REPL, cuale es el resultado de aplicar el operador typeof a true o false
//resultado: en ambos caso devuelve -> boolean

//actividad 2: corregir

function boolChecker(bool) {
  if (typeof bool === "boolean") {
    return "You've given me a bool, thanks!";
  }

  return `No bool, not cool. ${typeof bool}`;
}

console.log(boolChecker(1==1));
