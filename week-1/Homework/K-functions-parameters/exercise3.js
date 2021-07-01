// Write your function here

function createGreeting(nombre){ //decalro funcion
    var resultado = `Hola mi nombre es ${nombre}`; //declaro variable y le asigno un valor mas la entrada del parametro nombre
    return resultado;//devuelvo resultado
}

var greeting = createGreeting("Daniel");//llamo la funcion y el resultado se lo asigno a greeting

console.log(greeting);//imprimo greeting
