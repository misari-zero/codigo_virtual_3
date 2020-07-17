// Break y Continue

// continue; en un scope de una estructura repetitiva,
// salta u obvia todas las sentencias de la iteracion en la que
// nos encontremos y continuamos con la siguiente iteracion

// break; en un scope de una estructura repetitiva, finaliza
// todos los ciclos o iteraciones que restan por hacer
// sin importar en qué iteración nos encontremos

let nombre = ["jorge","teresa","javier","leonor","daniel","gianella"];
let edades = [20, 15, 75, 68, 45, 25];

// Que el usurio busque un nombre, y cuando el algoritmo lo encuentre
// se imprima su edad y la posición en la que se encuentra

let buscar = prompt("Ingrese el nombre a buscar en la base de datos datos");
let encontrado = false;

for (let i = 0; i < nombre.length; i++) {
    console.log(`i = ${i}`);

    if(nombre[i]  === buscar){
        console.log(`Encontrado ${buscar}`);
        console.log(`Edad: ${edades[i]}`);
        encontrado = true;
        break;
    }
}

// if(!encontrado)
// if(encontrado === false)

if(encontrado !== true){
    console.log("No se ha encontrado el usuario");
}


// ----------------------------- uso del continue
// De los arreglos anteriores, imprimir la edad y nombre 
// de las personas menores de 60 años.

for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 60){
        continue;
    }  
    console.log(`${nombres[i]} tiene ${edades[i]} años`);
}