const buscarPorDni = (dni) => {
    // conecto a la BD
    // hago la consulta del dni
    // RETORNO LA INFORMACION DE LA PERSONA
    
    let nombreEncontrado = "-----";
    setTimeout(function () {
        console.log("Buscando en la base de datos");
        nombreEncontrado = "Jorge Garnica";
    }, 2000);

    return nombreEncontrado;
};

let encontrado = buscarPorDni("45875212");
console.log(encontrado);