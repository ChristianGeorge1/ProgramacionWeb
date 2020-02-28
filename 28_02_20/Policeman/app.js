const util = require('util'); //Nos traemos el modulo

function Person(){ //Nos creamos 1 clase con dos propiedades
    this.firstname = 'John';  //Propiedad 1
    this.lastname = 'Doe' //Propiedad 2
}

Person.prototype.greet = function(){ //Creamos un saludo a la función
    console.log(`Hello ${this.firstname} ${this.lastname} , la placa es: ${this.badgenumber}`) //Log entre las personas
}

function Policeman(){ //Funcion de policia
    Person.call(this) //Poder tener acceso a la clase
    this.badgenumber = '1234' //Placa del policia
}
 
util.inherits(Policeman, Person); //Crear la herencia de la clase Policeman a la Person
let officer = new Policeman();  //Declaramos una nueva instancia

officer.greet(); //Mandamos el saludo :) 