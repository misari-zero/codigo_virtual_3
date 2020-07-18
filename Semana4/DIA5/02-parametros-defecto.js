// FUNCIONES CON PARAMETROS POR DEFECTO
function  trinomioCuadrado(a, b, c){

    if(typeof a === "number"){
        if(typeof b === "number"){
            if(typeof c ==== "number"){
                // la operacion
            }else{
                console.log("El numero C no fue correctamente ingresado");
            }
        }else{
            console.log("El numero B no fue correctamente ingresado");
        }
    }



    if (typeof a === "number" && typeof b === "number" && typeof c === "number"){
    // La formula es de mentiritas 
    let rpta = a*a*a + b*b*b + c*c*c;
    return rpta;
    }
    else{
        console.error("Los datos proporcionados no son correctos");
        return 0;
    }
}

let resultado = trinomioCuadrado(2, 4);
console.log(resultado);
/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar.
 * Si el algoritmo encuentra el nombre buscado dentro del arreglo,
 * retorna true, en caso contrario retorna false.
 * @param {array} nombres 
 * @param {string} busqueda
 * @return {boolean}
 */
function buscarNombre(nombres = [], busqueda = ""){
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] === busqueda){
            // la sentencia return en una funcion, no solo retorna un valor
            // sino que tambien hace que la funcion deje de ejecutarse en esa
            // sentencia, no importa si esta dentro un form while, if, etc.
            return true;
        }
    }
    // ¿que significa que el ciclo for acabe?
    return false;
}

let nombres=["martin","jaime","anita","paola", "daniel"];
let resultadoBusqueda = buscarNombre();
console.log(resultadoBusqueda);

// TODO: explicar NaN





function buscarNombre(arregloNombres, busqueda, posicionInicial=0){
    for (let i = posicionInicial; i < arregloNombres.length; i++) {
    }
}

let nombres = ["a","b","c","d","e","f","g","h","i","j","k"];

// opcion 1:
// el alagoritmo buscara el nombre desde la posicion proporcionada
buscarNombre([, , , , , , , ],"f", 23);

// opcion 2:
// el algoritmo buscara el nombre desde la posicion 0
buscarNombre([, , , , , , , ], "f");

// es una funcion que devuelve FALSE si el valor