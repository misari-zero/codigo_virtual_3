// Ingreso.
let semaforo = true;
let notas = [];
let suma = 0;

do{
    let nota = +prompt("Ingrese una nueva nota");
    if (nota == -1){
        semaforo = true;
    }else{
        notas.push(nota);
        suma += nota; //suma=suma+nota;
    }
}while (semaforo == true);
console.log(`Promedio de notas ${suma / notas.length}`);