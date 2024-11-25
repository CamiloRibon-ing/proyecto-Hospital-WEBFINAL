document.getElementById("registro-form").addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const identificacion=document.getElementById("identificacion").value.trim();
    const fecha=document.getElementById("fecha").value;
    const direccion=document.getElementById("direccion").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const perfil=document.getElementById("perfil").value;
    const usuario =document.getElementById("user").value.trim();
    const contrasena =document.getElementById("password").value.trim();


    if(!nombre || !apellido || !identificacion || !fecha || !direccion || !correo || !perfil || !usuario || !contrasena){
    alert("Por favor, complete los campoes");
    return;
    
    }
    const usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente= usuarios.find((u)=> u.usuario == usuario);
    if(usuarioExistente){

        alert("El nombre de usuario ya esta registrado,  por favor elija otro.");

        return;
    }

    const nuevoUsuario={

        nombre,
        apellido,
        identificacion,
        fecha,
        direccion,
        correo,
        perfil,
        usuario,
        contrasena,
        rol: "paciente",
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con exito, Ahora puede iniciar sesion");
    //para redireccionar a la pagina de login
    window.location.href = "loginprincipal.html";


});