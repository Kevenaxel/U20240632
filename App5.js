const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una frase: ', (fraseOriginal) => {
 
  rl.question('Ingrese la palabra que desea reemplazar: ', (palabraAntigua) => {
    
    rl.question('Ingrese la nueva palabra: ', (palabraNueva) => {
      
      const fraseModificada = fraseOriginal.replace(palabraAntigua, palabraNueva);

      console.log('Frase modificada:', fraseModificada);
      rl.close();
    });
  });
});

