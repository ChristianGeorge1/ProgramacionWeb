'use strict';
const EventEmitter = require('events')

class Person{
    constructor(){
      //  super(); 
        this.firstName = 'John'
        this.lastName = 'Doe'
    }
}

class PoliceMan extends Person{    
    constructor(){
        super();
        this.licensePlate = '1234'
    }
    greet(){
        console.log(`The name: ${this.firstName}, last name: ${this.lastName}, license plate: ${this.licensePlate}`)
    }
}
let police = new PoliceMan()
police.greet()