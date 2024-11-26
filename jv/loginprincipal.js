
// Inicializar los usuarios en el localStorage si no existen
if (!localStorage.getItem("usuarios")) {
    const usuarios = [
        { usuario: "medico1", contrasena: "123", rol: "medico" }, // Cambié "contraseña" por "contrasena"
        { usuario: "paciente1", contrasena: "1234", rol: "paciente" },
        { usuario:"docjulio", contrasena: "333", rol: "medico"},
    ];

    // Guardar usuarios en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("Usuarios inicializados y guardados en localStorage:", usuarios);
}

// Verifica si los datos están almacenados correctamente
const datosGuardados = localStorage.getItem("usuarios");
if (datosGuardados) {
    console.log("Datos recuperados del localStorage:", JSON.parse(datosGuardados));
} else {
    console.log("No hay datos almacenados en localStorage");
}

// Evento del formulario
document
    .querySelector(".formularioIngreso")
    .addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío predeterminado del formulario

        const usuarioInput = document.querySelector('input[name="usuario"]').value;
        const contrasenaInput = document.querySelector('input[name="contrasena"]').value;

        console.log("Usuario ingresado:", usuarioInput);
        console.log("Contraseña ingresada:", contrasenaInput);

        // Obtener usuarios desde el localStorage
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));

        // Validación adicional para asegurarse de que usuarios sea un array válido
        if (!Array.isArray(usuarios)) {
            console.error("Los datos en localStorage no son válidos");
            alert("Error al cargar los usuarios. Por favor, recargue la página.");
            return;
        }

        console.log("Usuarios en localStorage:", usuarios);

        // Buscar el usuario ingresado
        const usuarioEncontrado = usuarios.find(
            (user) =>
                user.usuario.trim() === usuarioInput.trim() &&
                user.contrasena.trim() === contrasenaInput.trim() // Validar con "contrasena"
        );

        console.log("Usuario encontrado:", usuarioEncontrado);

        if (usuarioEncontrado) {
            if (usuarioEncontrado.rol === "medico") {
                alert("Bienvenido, Médico");
                window.location.href = "seccionmedico.html";
            } else if (usuarioEncontrado.rol === "paciente") {
                alert("Bienvenido, Paciente");
                window.location.href = "seccionpaciente.html";
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
