document.getElementById("form-recuperar").addEventListener("submit", function (e){
e.preventDefault();

const usuarioInput=document.getElementById("recuperar-usuario").value.trim();
const nuevaContrasena=document.getElementById("nueva-contrasena").value.trim();
const confirmarContrasena=document.getElementById("confirmar-contrasena").value.trim();

if(!usuarioInput || !nuevaContrasena || !confirmarContrasena){

    alert("Por favor, complete todos los campos");
    return;
}
if(nuevaContrasena !== confirmarContrasena){
    alert("Las contraseñas no coinciden, por favor, verifique");
    return;

}

const usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

const usuarioEncontrado=usuarios.find(user=>user.usuario===usuarioInput || user.correo===usuarioInput);

if(usuarioEncontrado){

    usuarioEncontrado.contrasena=nuevaContrasena;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    
    alert("Contraseña recuperada con éxito, ahora puede iniciar sesion");
    window.location.href="loginprincipal.html";
}else{

    alert("Usuario o Contraseña no encontrado, por favor, verifique sus datos");
}



});