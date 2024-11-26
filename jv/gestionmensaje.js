function inicializarSistema() {
    const formulario = document.getElementById("message-form");
    formulario.addEventListener("submit", manejarEnvioMensaje); 
    console.log("Sistema inicializado");
}


function inicializarSistema() {
    const formulario = document.getElementById("message-form");
    formulario.addEventListener("submit", manejarEnvioMensaje);

    cargarMensajes(); // Cargar mensajes existentes al iniciar
    console.log("Sistema inicializado");
}

function manejarEnvioMensaje(event) {
    event.preventDefault();
    const remitente = obtenerValorInput("sender");
    const destinatario = obtenerValorInput("receiver");
    const contenidoMensaje = obtenerValorInput("message");

    if (validarEntradas(remitente, destinatario, contenidoMensaje)) {
        const nuevoMensaje = {
            remitente,
            destinatario,
            mensaje: contenidoMensaje,
            fechaHora: obtenerFechaHoraActual(),
        };

        guardarMensaje(nuevoMensaje); // Guardar mensaje en localStorage
        mostrarMensajeEnLog(nuevoMensaje);
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

function mostrarMensajeEnLog(mensaje) {
    const listaMensajes = document.getElementById("messages-list");
    const nuevoElemento = document.createElement("li");

    nuevoElemento.textContent = `[${mensaje.fechaHora}] ${mensaje.remitente} a ${mensaje.destinatario}: ${mensaje.mensaje}`;
    listaMensajes.appendChild(nuevoElemento);
}

function obtenerFechaHoraActual() {
    return new Date().toLocaleString();
}

function limpiarFormulario() {
    document.getElementById("message-form").reset();
}

// Guardar mensaje en localStorage
function guardarMensaje(mensaje) {
    const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    mensajes.push(mensaje);
    localStorage.setItem("mensajes", JSON.stringify(mensajes));
}

// Cargar mensajes existentes en el log
function cargarMensajes() {
    const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    mensajes.forEach((mensaje) => mostrarMensajeEnLog(mensaje));
}

document.addEventListener("DOMContentLoaded", inicializarSistema);