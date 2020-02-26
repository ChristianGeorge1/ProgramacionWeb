const EventEmitter = require('events'); //Importamos unos modulos
const util = require('util'); //Importamos unos modulos

function Greetr(){ //Creamos una función 
    this.greeting = '¡Hello world!'; //Función de hola mundo
}

util.inherits(Greetr, EventEmitter); //Primer parametro va a heredar las funciones del segundo parametro

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data) //Se envia para el emisor de eventos
}

let greeter1 = new Greetr(); 
greeter1.on('greet', (data)=>{
    console.log('¡Someone greeted! ' + data)
});
greeter1.greet('Tony');