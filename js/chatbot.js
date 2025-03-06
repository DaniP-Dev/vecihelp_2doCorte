document.getElementById("entrada").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enviarMensaje();
    }
});
const abrirChat = () => {
    document.getElementById("chatContainer").style.display = "block";
    document.getElementById("btnChatbot").style.display = "none";
};
const cerrarChat = () => {
    document.getElementById("chatContainer").style.display = "none";
    document.getElementById("btnChatbot").style.display = "block";
};

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