const Fechainicial = new Date ('2024-02-02');
const Fechafinal = new Date('2024-12-02');

const Diferenciaminisegundos = Fechafinal - Fechainicial;

const Diferenciadedias = Math.floor(Diferenciaminisegundos / (1000 * 60 * 60 * 24));

console.log(`La diferencia entre la fecha es: ${Diferenciadedias} Dias.`);
