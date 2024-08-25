const Fechaactual = new Date()

//Obtener el numero del mes 0-12
const Numeromes = Fechaactual.getMonth()

//nombre de los meses del ano
const Nombredemeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

//Obtener nommbre mes
const Nombremesesactual = Nombredemeses[Numeromes]

console.log(`Estamos en: ${Nombremesesactual}`)