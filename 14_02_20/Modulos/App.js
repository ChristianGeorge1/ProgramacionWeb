//FUNCTION
let greet = require('./Greet');
greet();

//METHOD
let greet2 = require('./Greet2').greet
greet2();

//OBJECT
let greet3 = require('./Greet3');
greet3.greet();

greet3.greeting = 'Changed hello world' //Esta fue la modificación

//Ya quedo modificado
let greet3b = require('./Greet3')
greet3b.greet();

//CONSTRUCTOR 
var Greet4 = require('./Greet4')
var grtr = new Greet4();

grtr.greet();