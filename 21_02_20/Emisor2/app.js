const Emitter = require('events');
const EventsConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(EventsConfig.GREET,()=>{
    console.log('Somewhere, someone said hello');
});

emtr.on(EventsConfig.GREET, ()=>{ 
    console.log('A greeting ocurred!');
});

console.log('Hello');
emtr.emit(EventsConfig.GREET);
