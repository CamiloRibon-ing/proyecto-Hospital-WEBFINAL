document.addEventListener('DOMContentLoaded', function(){

    const especialidades=JSON.parse(localStorage.getItem('especialidad')) || [];
    const medicos = JSON.parse(localStorage.getItem('medicos')) || [];
    const selectEspecialidad= document.getElementById('especialidades');
    const selectMedico = document.getElementById('medicos');


    especialidades.forEach(especialidad => {
        const option = document.createElement('option');
        option.value=especialidad.nombreEspecialidad;
        option.textContent=especialidad.nombreEspecialidad;
        selectEspecialidad.appendChild(option);
        
    });

    selectEspecialidad.addEventListener('change', function(){
        const especialidadSeleccionada = this.value;

        selectMedico.innerHTML='';

        medicos.forEach(medico=>{

            if(medico.especialidad===especialidadSeleccionada){

                const option = document.createElement('option');
                option.value=medico.nombreMedico;
                option.textContent=medico.nombreEspecialidad;
                selectMedico.appendChild(option)
            }
        });
});
});

document.querySelector('form').addEventListener('submit',function(e){

    e.preventDefault();

    const idCita=generarIdUnico('CITA');
    const fechaConsulta=document.getElementById('fechaConsulta').value;
    const especialidad= document.getElementById('especialidades').value;
    const medico=document.getElementById('medicos').value;
    const estadoCita=document.getElementById('estadoCita').value;
    const motivoConsulta=document.getElementById('motivoconsulta').value;
    
    
    const cita={idCita, fechaConsulta,especialidad,medico,estadoCita,motivoConsulta};

    const citas=JSON.parse(localStorage.getItem('citas')) || [];
    citas.push(cita);
    localStorage.setItem('citas',JSON.stringify(citas));


    alert('Cita agendada');
    this.reset();
});