
function validarEdad(edad) {
    return new Promise((resolve, reject) => {
      if (edad >= 18) {
        resolve("Edad válida para acceder al contenido");
      } else {
        reject("Edad insuficiente para acceder al contenido");
      }
    });
  }
  

  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Ingresa tu edad: ', (input) => {
    const edadUsuario = parseInt(input); 
    validarEdad(edadUsuario)
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.error(error);
      });
  
    rl.close();
  });
  