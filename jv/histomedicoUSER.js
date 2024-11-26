document.addEventListener('DOMContentLoaded', () => {
    console.log("Script para paciente cargado correctamente."); 

    const form = document.getElementById('histouser');
    if (!form) {
        console.error("Formulario no encontrado. Verifica el ID del formulario en el HTML.");
        return;
    }
    console.log("Formulario de paciente detectado:", form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Evento de formulario disparado.");

        const identificacion = document.getElementById('histomedico').value;
        console.log("Identificación ingresada:", identificacion);

        const historiales = obtenerDeLocalStorage('historiales');
        console.log("Historiales recuperados:", historiales);

        const historial = historiales.find((h) => h.identificacion === identificacion);
        console.log("Historial encontrado:", historial);

        if (historial) {
            document.getElementById('fechaConsulta').value = historial.fechaConsulta;
            document.getElementById('diagnostico').value = historial.diagnostico;
            document.getElementById('tratamiento').value = historial.tratamiento;
            document.getElementById('notas').value = historial.notas;
            console.log("Datos cargados en el formulario.");
        } else {
            console.warn("No se encontró un historial con esa identificación.");
            alert('No se encontró un historial con esa identificación.');
        }
    });
});
