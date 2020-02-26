const Emitter = require('events');
const EventsConfig = require('./config').events;
var emtr = new Emitter();

//Mandamos a llamar nuestro archivo config
emtr.on(EventsConfig.GREET,()=>{
    console.log('Somewhere, someone said hello');
});
//Mandamos a llamar nuestro archivo config
emtr.on(EventsConfig.GREET, ()=>{ 
    console.log('A greeting ocurred!');
});

console.log('Hello');
//Invocamos el metodo emit para mandar a llamar
emtr.emit(EventsConfig.GREET);
