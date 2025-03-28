// Asegúrate de que el código se ejecute cuando todo el contenido esté cargado
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Obtener los datos del usuario desde localStorage
        const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

        if (usuarioLogueado) {
            // Llenar los elementos del HTML con la información del usuario
            document.getElementById("nombreUsuario").textContent = `¡Hola, ${usuarioLogueado.nombre}!`;
            document.getElementById("emailUsuario").textContent = `Correo: ${usuarioLogueado.email}`;
            document.getElementById("direccionUsuario").textContent = `Dirección: ${usuarioLogueado.direccion}`;
            document.getElementById("fechaNacimientoUsuario").textContent = `Fecha de nacimiento: ${usuarioLogueado.fecha_nacimiento}`;
            document.getElementById("fechaRegistroUsuario").textContent = `Fecha de registro: ${usuarioLogueado.fecha_registro}`;
        } else {
            // Mostrar mensaje alternativo si no hay usuario logueado
            document.getElementById("nombreUsuario").textContent = "No hay un usuario logueado.";
        }

        
    } catch (error) {
        console.error("Error al cargar los datos de localStorage:", error);
        document.getElementById("nombreUsuario").textContent = "Error al cargar el usuario.";
    }
});