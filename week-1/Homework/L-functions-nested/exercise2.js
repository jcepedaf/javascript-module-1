// se declara variables de nombres con letras minusculas
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function nombreMayuscula(a){ //declaro funcion que convierte letras minusculas en mayusculas y retorna el resultado
   
    let b = a.toUpperCase();//cambia el parametro de entrada las letras minusculas a mayusculas y asigna el valor a b
       
    return b;//retorna valor de b

}

function shoutyGreeting(a,b,c,d,e) {//declaro funcion que recibe 5 parametros y imprime mensaje HELLO + nombre en mayuscula

    console.log("HELLO "+ nombreMayuscula(a));//imprime mensaje HELLO mas el resultado del funcion nombreMayuscula que recibe parametro a
    console.log("HELLO "+ nombreMayuscula(b));//imprime mensaje HELLO mas el resultado del funcion nombreMayuscula que recibe parametro b
    console.log("HELLO "+ nombreMayuscula(c));//imprime mensaje HELLO mas el resultado del funcion nombreMayuscula que recibe parametro c
    console.log("HELLO "+ nombreMayuscula(d));//imprime mensaje HELLO mas el resultado del funcion nombreMayuscula que recibe parametro d
    console.log("HELLO "+ nombreMayuscula(e));//imprime mensaje HELLO mas el resultado del funcion nombreMayuscula que recibe parametro e


}

shoutyGreeting(mentor1,mentor2,mentor3,mentor4,mentor5); //llamo a la funcion shoutyGreeting con los parametros mentor1-5