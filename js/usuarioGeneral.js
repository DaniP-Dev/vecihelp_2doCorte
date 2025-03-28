const cerrarCuenta = () => {
    // Al hacer clic en "Cerrar sesión"
    localStorage.removeItem("usuarioLogueado");
    console.log("Usuario eliminado del localStorage. Sesión cerrada.");
    window.location.href = "../html/login.html";
}

// Obtener el usuario logueado del localStorage
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

if (usuarioLogueado && usuarioLogueado.nombre) {
    // Manipular el contenido del h1
    document.getElementById("nombreUsuario").textContent = `¡Hola, ${usuarioLogueado.nombre}!`;
} else {
    // Si no hay usuario logueado
    document.getElementById("nombreUsuario").textContent = "No hay un usuario logueado.";
}