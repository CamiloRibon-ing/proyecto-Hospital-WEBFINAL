function inicializarSistema() {
    const formulario = document.getElementById("message-form");
    formulario.addEventListener("submit", manejarEnvioMensaje); 
    console.log("Sistema inicializado");
}


function manejarEnvioMensaje(event) {
    event.preventDefault(); 
    const remitente = obtenerValorInput("sender");
    const destinatario = obtenerValorInput("receiver");
    const contenidoMensaje = obtenerValorInput("message");

    if (validarEntradas(remitente, destinatario, contenidoMensaje)) {
        mostrarMensajeEnLog(remitente, destinatario, contenidoMensaje);
        limpiarFormulario();
        console.log("Mensaje enviado correctamente");
    } else {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
    }
}

function obtenerValorInput(id) {
    return document.getElementById(id).value.trim(); 
}


function validarEntradas(remitente, destinatario, mensaje) {
    return remitente !== "" && destinatario !== "" && mensaje !== "";
}


function mostrarMensajeEnLog(remitente, destinatario, mensaje) {
    const listaMensajes = document.getElementById("messages-list");
    const nuevoMensaje = document.createElement("li");
    const fechaHora = obtenerFechaHoraActual();

    nuevoMensaje.textContent = `[${fechaHora}] ${remitente} a ${destinatario}: ${mensaje}`;
    listaMensajes.appendChild(nuevoMensaje);
}

function obtenerFechaHoraActual() {
    return new Date().toLocaleString(); 
}

function limpiarFormulario() {
    document.getElementById("message-form").reset(); 
}


document.addEventListener("DOMContentLoaded", inicializarSistema);