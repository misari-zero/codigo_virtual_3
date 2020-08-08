// Las funciones anonimas son funciones cuyo valor
// se guarda en una variable.

const sumar = function (a,b){
    return a+b;
};

let rpta = sumar(7, 8);
console.log(rpta);

// Funciones de flecha
const sumarFlecha = (a,b) =>{
    return a+b;
};
console.log(sumarFlecha(500, 20));


const miFunction = () => {};
flecha