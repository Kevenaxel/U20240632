const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function esPalindromo(Palabra) {
  const PalabraLimpia = Palabra.toLowerCase().replace(/\s/g, '');
  return PalabraLimpia === PalabraLimpia.split('').reverse().join('');
}


rl.question('Ingresa una palabra: ', (Palabra)=>{
  if (esPalindromo(Palabra)) {
    console.log(`La palabra "${Palabra}" si es un palíndromo.`);
  } else {
    console.log(`La palabra "${Palabra}" no es un palíndromo.`);
  }
  rl.close();
});
