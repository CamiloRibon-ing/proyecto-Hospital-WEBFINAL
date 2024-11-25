document.addEventListener('DOMContentLoaded',function(){

    const especialidades=JSON.parse(localStorage.getItem('especialidades')) || [];

    const selectEspecialidad=document.getElementById('especialidad');

    especialidades.forEach(especialidad=> {
        if(especialidad.estado === 'activa'){

            const option=document.createElement('option');
            option.value=especialidad.nombreEspecialidad;
            option.textContent=especialidad.nombreEspecialidad;
            selectEspecialidad.appendChild(option);
        }
        
    });
});

document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();

    const idMedico=generarIdUnico('MED');


    const nombreMedico=document.getElementById('nombreMedico').value;
    const licenciaMedico=document.getElementById('licenciaMedico').value;
    const especialidad=document.getElementById('especialidad').value;
    const telefono = document.getElementById('telefono').value;


    if(!especialidad){

        alert('Por favor selecciona una especialidad.');
        return;
    }

    const medico={ idMedico, nombreMedico, licenciaMedico, especialidad, telefono };

    const medicos=JSON.parse(localStorage.getItem('medicos')) || [];
    medicos.push(medico);

    localStorage.setItem('medicos', JSON.stringify(medicos));

    alert('Medico registrado exitosamente');

    this.reset();

    
    console.table(medicos);
});
/** 
*@param{string}
*@returns{string} //idUnico
*/

function generarIdUnico(prefix=''){
    return prefix +Math.floor(Math.random()*10000);
}