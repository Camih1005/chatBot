window.addEventListener("load", () => {
    console.log("la pagina ya se cargo");
    
    let chat = document.getElementById("chat");
    let input = document.getElementById("inputChat");
    let boton = document.getElementById("boton");

    function enviarMensaje() {
        let valor = input.value.trim();
        
        if (valor !== "") {
            agregarMensajeUsuario(valor);
            procesarRespuestaChatbot(valor);
            input.value = ""; 
        }
    }

    function agregarMensajeUsuario(mensaje) {
        let contenedorMensaje = document.createElement("div");
        contenedorMensaje.classList.add("mensaje", "mensaje-usuario");
        let p = document.createElement("p");
        p.textContent = mensaje;
        contenedorMensaje.appendChild(p);
        chat.after(contenedorMensaje);
    }

    function agregarMensajeChatbot(mensaje) {
        let contenedorMensaje = document.createElement("div");
        contenedorMensaje.classList.add("mensaje", "mensaje-chatbot");
        let p = document.createElement("p");
        p.textContent = mensaje;
        contenedorMensaje.appendChild(p);
        chat.after(contenedorMensaje);
    }

    function procesarRespuestaChatbot(mensaje) {
      
        let respuestaChatbot = obtenerRespuestaChatbot(mensaje);
        agregarMensajeChatbot(respuestaChatbot);
    }

    function obtenerRespuestaChatbot(mensaje) {
       
        return "¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?";
    }

    boton.addEventListener("click", enviarMensaje);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarMensaje();
        }
    });
});
