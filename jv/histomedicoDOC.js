
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script para médico cargado correctamente."); // Verificar que el script se carga

    const form = document.getElementById('histouser');
    console.log("Formulario de médico detectado:", form); // Verificar que el formulario se detecta correctamente

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Evento de formulario disparado.");

        // Obtener datos del formulario
        const identificacion = document.getElementById('histomedico').value;
        const fechaConsulta = document.getElementById('fechaConsulta').value;
        const diagnostico = document.getElementById('diagnostico').value;
        const tratamiento = document.getElementById('tratamiento').value;
        const notas = document.getElementById('notas').value;

        console.log("Datos capturados del formulario:", {
            identificacion,
            fechaConsulta,
            diagnostico,
            tratamiento,
            notas,
        });

        const nuevoHistorial = { identificacion, fechaConsulta, diagnostico, tratamiento, notas };

        const action = event.submitter.textContent;
        console.log("Acción seleccionada:", action);

        if (action === 'Agregar') {
            // Agregar historial
            let historiales = obtenerDeLocalStorage('historiales');
            console.log("Historiales antes de agregar:", historiales);

            historiales.push(nuevoHistorial);
            guardarEnLocalStorage('historiales', historiales);
            console.log("Historiales después de agregar:", historiales);

            alert('Historial agregado con éxito.');
        } else if (action === 'Modificar') {
            // Modificar historial
            console.log("Modificando historial con ID:", identificacion);
            modificarHistorial(identificacion, nuevoHistorial);
        } else if (action === 'Eliminar') {
            // Eliminar historial
            console.log("Eliminando historial con ID:", identificacion);
            eliminarHistorial(identificacion);
        }

        form.reset(); // Limpiar formulario
        console.log("Formulario reseteado.");
    });
});
