window.addEventListener("load", () => {
    console.log("la pagina ya se cargo");
    
    let send = document.getElementById("boton");
    let chat = document.getElementById("chat");
    let input = document.getElementById("inputChat");

    function enviarMensaje() {
        let valor = input.value.trim();
        
        if (valor !== "") {
            if (valor === "1") {
                chat.innerHTML = "<p>Seleccionaste Servicio al cliente.</p>";
                send.removeEventListener("click", enviarMensaje);
            } else if (valor === "2") {
                chat.innerHTML = "<p>Seleccionaste Ayuda con productos.</p>";
                send.removeEventListener("click", enviarMensaje);
            } else if (valor === "3") {
                chat.innerHTML = "<p>Seleccionaste Ver productos.</p>";
                send.removeEventListener("click", enviarMensaje);
            } else {
                chat.innerHTML = "<p>Opción no válida. Por favor, elige una opción válida.</p>";
            }
            input.value = ""; 
        }
    }

    send.addEventListener("click", enviarMensaje);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarMensaje();
        }
    });
});
