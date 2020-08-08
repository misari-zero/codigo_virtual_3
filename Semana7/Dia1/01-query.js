// Capturar elementos con jquery
// $("#btnCambiarParrafo")
let btnCambiarParrafo = $("#btnCambiarParrafo");

// eventos en JQUERY
$("#btnCambiarParrafo").click( () => { 
    // modificar el texto (innerText) de un elemento
    $("#parrafo1").text("Nuevo texto del párrafo");
});

$("#btnAgregarNumero").click(() => {
    let random = (Math.random() * (47 - 0) + 0).toFixed(0);
    // Crear elementos JQUERY y agregarlos a otros elementos
    let li = $(`<li>${random}</li>`);
    $("#numeros").append(li);
});

$("#btnEstilosLi").click(() => {
    // Aplicar estilos CSS a uno o varios elementos
    $("#numeros li").css("background-color", "#444").css("color", "#eee");
});


$("#btnFormulario").click(() => {
    $("#formulario").addClass("formulario");
});
