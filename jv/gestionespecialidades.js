document.querySelector('form').addEventListener('submit', function (e) { 
    e.preventDefault(); 
    
    try {

        const idEspecialidad = generarIdUnico();
        document.getElementById('idEspecialidad').setAttribute('value', idEspecialidad);

      
        const nombreEspecialidad = document.getElementById('Nombreespecialidad').value;
        const descripcion = document.getElementById('descripcionEspecialidad').value || "Sin descripción";
        const estado = document.getElementById('estadoEspecialidad').value;

        
        const fechaActual = new Date();
        const fechaCreacion = fechaActual.toISOString().slice(0, 16); 
        document.getElementById('fechaCreacion').value = fechaCreacion;

        
        const especialidad = { 
            idEspecialidad, 
            nombreEspecialidad, 
            descripcion, 
            estado, 
            fechaCreacion 
        };

        
        const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
        especialidades.push(especialidad);
        localStorage.setItem('especialidades', JSON.stringify(especialidades));

        console.table(especialidades);

        
        alert('Especialidad registrada exitosamente.');
        this.reset(); 

    } catch (error) {
        console.error('Error al guardar la especialidad:', error);
        alert('Ocurrió un error al registrar la especialidad. Verifica la consola.');
    }
});

function generarIdUnico() {
    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    let idUnico;
    do {
        idUnico = Math.floor(1000 + Math.random() * 9000); 
    } while (especialidades.some(especialidad => especialidad.idEspecialidad == idUnico)); 
    return idUnico;
}
