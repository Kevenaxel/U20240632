const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function hacerPregunta() {
    return new Promise((resolve, reject) => {
        rl.question('Escribe un número: ', (respuesta) => {
            const numero = parseInt(respuesta);
            if (isNaN(numero)) {
                reject('No ingresaste un número válido.');
            } else {
                resolve(numero);
            }
        });
    });
}


hacerPregunta()
    .then((numeroIngresado) => {
        if (numeroIngresado === 5) {
            console.log('Correcto El número es 5.');
        } else {
            console.log('Lo siento, el número no es 5.');
        }
        rl.close();
    })
    .catch((error) => {
        console.error(error);
        rl.close();
    });
