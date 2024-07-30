const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una cadena: ', (Cadena) => {

  rl.question('Ingresa el índice inicial: ', (inicio) => {

    rl.question('Ingresa el índice final: ', (Fin) => {

      const startIndex = parseInt(inicio);
      const endIndex = parseInt(Fin);


      const subCadena = Cadena.substring(startIndex, endIndex);

  
      console.log('SubCadena extraída:', subCadena);
      rl.close();
    });
  });
});
