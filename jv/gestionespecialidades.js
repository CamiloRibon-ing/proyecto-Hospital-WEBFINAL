document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const idespecialidad=generarIdUnico('ESP');
    const nombreEspecialidad = document.getElementById('Nombreespecialidad').value;
    const descripcion=document.getElementById('descripcionEspecialidad').value;
    const estado=document.getElementById('estadoEspecialidad').value;
    const fechaCreacion=new Date().toLocaleDateString();

    const especialidad={idespecialidad, nombreEspecialidad, descripcion,estado, fechaCreacion};

    const especialidades=JSON.parse(localStorage.getItem('especialidades')) || [];
    especialidades.push(especialidad);
    localStorage.setItem('especialidades', JSON.stringify(especialidades));

    alert('Especialidad registrada');
    this.reset();
    

});