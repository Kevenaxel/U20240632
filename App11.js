function capitalizarPalabras(Frase) {
    return Frase
      .toLowerCase()
      .split(' ')
      .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(' ');
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Ingrese una frase por favor: ', (Frase) => {
    const fraseCapitalizada = capitalizarPalabras(Frase);
    console.log(`Frase capitalizada: ${fraseCapitalizada}`);
    rl.close();
  });
  