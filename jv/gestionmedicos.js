document.addEventListener('DOMcontentLoaded', function() {
    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    const selecEspecialidad = document.getElementById('especialidad');



    //llenamos el select con las especialidades activas

    especialidades.forEach(especialidad => {

        if(especialidad.estado === 'activa'){

            const option=document.createElement('option');
            option.value=especialidad.nombreEspecialidad;
            option.textContent=especialidad.nombreEspecialidad;
            selecEspecialidad.appendChild(option);


        }
        
    });



});


document.querySelector('form').addEventListener('submit', function(e){


    e.preventDefault();

    const idMedico=generarIdUnico('MED')
    const nombreMedico=document.getElementById('nombreMedico').value;
    const licenciaMedico= document.getElementById('licenciaMedico').value;
    const especialidad=document.getElementById('especialidad').value;
    const telefono = document.getElementById('telefono').value;

    const medico = {idMedico,nombreMedico,licenciaMedico,especialidad,telefono};

    const medicos=JSON.parse(localStorage.getItem('medicos')) || [];
    medicos.push(medico);
    localStorage.setItem('medicos', JSON.stringify(medicos));
    alert('Medico registrado');
    this.reset();
});