var socket = io();
//.on = escuchar del servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
})

//.emit Enviar informacion
socket.emit('enviarMensaje', {
    usuario: "Miguel",
    mensaje: "Hola Mundo"
}, function(resp) {
    console.log(resp);
})

// Escuchar mensaje del servidor
socket.on('enviarMensaje', function(mensaje) {
    alert(mensaje.mensaje);
})