document.addEventListener('DOMContentLoaded', function() {
    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    const medicos = JSON.parse(localStorage.getItem('medicos')) || [];
    
    const selectEspecialidad = document.getElementById('especialidades');
    const selectMedico = document.getElementById('medicos');

    // Llenar el select de especialidades
    especialidades.forEach(especialidad => {
        const option = document.createElement('option');
        option.value = especialidad.nombreEspecialidad;
        option.textContent = especialidad.nombreEspecialidad;
        selectEspecialidad.appendChild(option);
    });

    // Cargar médicos según la especialidad seleccionada
    selectEspecialidad.addEventListener('change', function() {
        const especialidadSeleccionada = this.value;
        
        selectMedico.innerHTML = '';  // Limpiar la lista de médicos

        medicos.forEach(medico => {
            if (medico.especialidad === especialidadSeleccionada) {
                const option = document.createElement('option');
                option.value = medico.nombreMedico;
                option.textContent = medico.nombreMedico;
                selectMedico.appendChild(option);
            }
        });
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const idCita = generarIdUnico('CITA');
    const fechaConsulta = document.getElementById('fechaConsulta').value;
    const especialidad = document.getElementById('especialidades').value;
    const medico = document.getElementById('medicos').value;
    const estadoCita = document.getElementById('estadocita').value;
    const motivoConsulta = document.getElementById('motivoconsulta').value;

    // Validaciones
    if (!fechaConsulta) {
        alert('Por favor, ingrese la fecha de su consulta.');
        return;
    }
    if (!especialidad) {
        alert('Por favor, seleccione una especialidad.');
        return;
    }
    if (!medico) {
        alert('Por favor, ingrese el nombre del médico.');
        return;
    }
    if (!estadoCita) {
        alert('Por favor, seleccione el estado de la cita.');
        return;
    }
    if (!motivoConsulta.trim()) {
        alert('Por favor, ingrese el motivo de su consulta.');
        return;
    }

    const cita = { idCita, fechaConsulta, especialidad, medico, estadoCita, motivoConsulta };
    console.log('Nueva cita registrada', cita);


    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));

    console.log('Citas almacenadas', citas);


    alert('Cita agendada');
    this.reset();  // Limpiar el formulario

   
});

// Función para generar un ID único
function generarIdUnico(prefix = '') {
    return prefix + Math.floor(Math.random() * 10000);
}
