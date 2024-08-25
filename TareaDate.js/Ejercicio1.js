const Fechaespecifica = new Date('Febrero 20, 2012 3:12:00');

const Opcionesformato = {
    year: 'numeric',
     month: 'long',
      day: 'numeric', 
      hour: 'numeric',
       minute: 'numeric',
        hour12: true
    };

const Horaformateada = Fechaespecifica.toLocaleString('en-US', Opcionesformato);

console.log(`Fecha y la hora Formateada: ${Horaformateada}`);