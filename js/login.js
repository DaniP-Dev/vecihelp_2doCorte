// Funcion para manejar el login
function loginUsuario() {
    // Obtener los valores de los inputs
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    // Realizar la solicitud al backend con Axios
    axios.post('http://localhost:8000/login', {
        email: email,
        password: password
    })
        .then(response => {
            if (response.data.mensaje === "Inicio de sesión exitoso") {
                // Al iniciar sesión exitosamente
                const usuarioLogueado = {
                    id: response.data.usuario.id,
                    nombre: response.data.usuario.nombre,
                    email: response.data.usuario.email,
                    direccion: response.data.usuario.direccion
                };

                // Guardar la información en localStorage
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
                console.log("Usuario guardado en localStorage:", usuarioLogueado);

                window.location.href = "../html/usuarioGeneral.html";
                alert(`¡Bienvenido, ${response.data.usuario.nombre}!`);
            } else {
                alert("Credenciales incorrectas. Intenta nuevamente.");
            }
        })
        .catch(error => {
            console.error("Error de conexión:", error.message);
            alert("Hubo un problema al intentar iniciar sesión.");
        });
}

