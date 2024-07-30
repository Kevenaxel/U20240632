const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una frase:', (Frase) =>{
    const palabras = Frase.split(' ');
    const palabrasFiltradas = palabras.filter((palabra) => palabra.trim() !== '');
    const numeroDePalabras = palabrasFiltradas.length;
  console.log(`Número de palabras en la frase: ${numeroDePalabras}`);
  rl.close();
})