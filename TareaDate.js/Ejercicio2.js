const FechaActual = new Date()

const Diasemana = FechaActual.getDay()

const Nombredia = ['Sun', 'Mon', 'True', 'Wed', 'Thu', 'Fri','Sat']

const NombrediaActual = Nombredia[Diasemana]

console.log(`Hoy es: ${NombrediaActual}`)