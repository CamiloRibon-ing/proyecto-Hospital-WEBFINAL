document.querySelector('form').addEventListener('submit', function (e) { 
    e.preventDefault(); // Prevenir el envío del formulario
    
    try {
        // Generar un ID único de 4 dígitos
        const idEspecialidad = generarIdUnico();
        document.getElementById('idEspecialidad').setAttribute('value', idEspecialidad);

        // Obtener los valores de los campos del formulario
        const nombreEspecialidad = document.getElementById('Nombreespecialidad').value;
        const descripcion = document.getElementById('descripcionEspecialidad').value || "Sin descripción";
        const estado = document.getElementById('estadoEspecialidad').value;

        // Generar fecha en formato requerido
        const fechaActual = new Date();
        const fechaCreacion = fechaActual.toISOString().slice(0, 16); // yyyy-MM-ddThh:mm
        document.getElementById('fechaCreacion').value = fechaCreacion;

        // Crear objeto de especialidad
        const especialidad = { 
            idEspecialidad, 
            nombreEspecialidad, 
            descripcion, 
            estado, 
            fechaCreacion 
        };

        // Guardar en LocalStorage
        const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
        especialidades.push(especialidad);
        localStorage.setItem('especialidades', JSON.stringify(especialidades));

        console.table(especialidades);

        // Mostrar confirmación y reiniciar el formulario
        alert('Especialidad registrada exitosamente.');
        this.reset(); // Reiniciar formulario

    } catch (error) {
        console.error('Error al guardar la especialidad:', error);
        alert('Ocurrió un error al registrar la especialidad. Verifica la consola.');
    }
});

// Generar un ID único de 4 dígitos
function generarIdUnico() {
    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    let idUnico;
    do {
        idUnico = Math.floor(1000 + Math.random() * 9000); // Generar un número entre 1000 y 9999
    } while (especialidades.some(especialidad => especialidad.idEspecialidad == idUnico)); // Asegurar que el ID no esté repetido
    return idUnico;
}
