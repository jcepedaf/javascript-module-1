let students = ["Jesús", "María", "Juan", "Matias", "Wendy", "Julian"];

let students2 = ["Caleb","Leonardo","Giomar","Genesis"];

let total = students.concat(students2);

function verificarEstudiante(nombre, estudiantes) {
  if (estudiantes.includes(nombre)) {
    console.log(nombre + " si esta en la lista de estudiantes "+total.join(", "));
  } else {
    console.log(nombre + " no esta en la lista de estudiantes "+total.join(" ,"));
  }
}

verificarEstudiante("Wendy", total.sort());

//console.log(total.sort());

