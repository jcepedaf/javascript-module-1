// Declare your function here

function createGreeting(nombre,edad){ //declaro funcion
    var resultado = `Hola mi nombre es ${nombre} y tengo ${edad} años` ; //declaro variable y le asigno un valor mas la entrada del parametro nombre y edad
    return resultado;//devuelvo resultado
}

const greeting = createGreeting("Daniel",30);//llamo la funcion y el resultado se lo asigno a greeting

console.log(greeting);//imprimo greeting






