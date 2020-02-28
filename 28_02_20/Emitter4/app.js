'use strict'; //Uso estricto del programa

const EventEmitter = require('events'); //Importamos unos modulos

//Crear clase con ES6
class Greetr extends EventEmitter{ //Heredar del modulo EventEmitter

    constructor(){
        super(); //Para llamar al constructor de la clase
        this.greeting = '¡Hello world!'
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data)
    }
}
let data = 'Corona'
let greeter1 = new Greetr(); 
greeter1.on('greet', (data)=>{
    console.log('¡Someone greeted! ' + data)
});
greeter1.greet(data);
