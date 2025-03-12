document.addEventListener("DOMContentLoaded", () => {
    const configurarToggleIframe = (idBoton, idContenedorIframe) => {
        const botonToggle = document.getElementById(idBoton);
        const contenedorIframe = document.getElementById(idContenedorIframe);

        if (botonToggle && contenedorIframe) {
            botonToggle.addEventListener("click", () => {
                if (contenedorIframe.classList.contains("d-none")) {
                    contenedorIframe.classList.remove("d-none"); // Mostrar iframe
                    botonToggle.textContent = "Cerar";
                } else {
                    contenedorIframe.classList.add("d-none"); // Ocultar iframe
                    botonToggle.textContent = "ChatBot";
                }
            });
        } else {
            console.error(`Elementos con los IDs ${idBoton} o ${idContenedorIframe} no encontrados.`);
        }
    };

    // Configuración inicial
    configurarToggleIframe("botonIframe", "contenedorIframe");
});


document.getElementById("entrada").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enviarMensaje();
    }
});

const enviarMensaje = () => {
    let entrada = document.getElementById("entrada");
    let mensaje = entrada.value.trim();

    if (mensaje !== "") {
        let chat = document.getElementById("chat"); // Asegúrate de que chat tiene el ID correcto

        // Crear mensaje del usuario
        let mensajeUsuario = document.createElement("div");
        mensajeUsuario.classList.add("alert", "alert-secondary", "p-2", "text-end");
        mensajeUsuario.innerHTML = `<strong>Tú:</strong> ${mensaje}`;
        chat.appendChild(mensajeUsuario);

        // Respuesta automática del chatbot
        setTimeout(() => {
            let mensajeBot = document.createElement("div");
            mensajeBot.classList.add("alert", "alert-primary", "p-2");
            mensajeBot.innerHTML = `<strong>Chatbot:</strong> No entendí eso, pero intentaré ayudarte.`;
            chat.appendChild(mensajeBot);
            chat.scrollTop = chat.scrollHeight; // Hace scroll hacia abajo automáticamente
        }, 500);

        // Limpiar input y hacer scroll abajo
        entrada.value = "";
        chat.scrollTop = chat.scrollHeight;
    }
};