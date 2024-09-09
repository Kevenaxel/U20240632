function enviarCorreoElectronico(direccionCorreo) {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            if (direccionCorreo) {
                resolve("Correo enviado");
            } else {
                reject("Dirección de correo no proporcionada");
            }
        }, 2000);
    });
}

// Uso de la función
enviarCorreoElectronico("usuario@example.com")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

enviarCorreoElectronico("") 
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));