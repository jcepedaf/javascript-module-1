function usuarioTipo(array) {
  if (array[1] == "manager" || array[1] == "admin") {
    console.log("Usuario Valido por tipo admin o manager");
  } else if ( (
    array[0][0] == "a" ||
    array[0][0] == "e" ||
    array[0][0] == "i" ||
    array[0][0] == "o" ||
    array[0][0] == "u") && (array[0].length < 10) && (array[0].length > 5) )
   {
    console.log("Usuario Valido porque empieza por vocal y cumple con cantidad de caracteres");
  } else {
    console.log("Usuario invalido");
  }
}
let usuario1 = ["jesus", "admin"];
let usuario2 = ["maria", "manager"];
let usuario3 = ["alberto", "normal"];
let usuario4 = ["anna", "normal"];

usuarioTipo(usuario1);
