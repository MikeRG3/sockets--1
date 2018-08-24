const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a mi web'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar del cliente
    client.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "OK"
        //     })
        // } else {
        //     callback({
        //         resp: "KO"
        //     })
        // }


    })
})