function contarVocales(Palabra) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
  
    for (let i = 0; i < Palabra.length; i++) {
      if (vocales.includes(Palabra[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  
  rl.question('Ingrese una palabra: ', (Palabra) => {
    const numVocales = contarVocales(Palabra);
    console.log(`El número  total de vocales en  "${Palabra}" es: ${numVocales}`);
    rl.close();
  });
  