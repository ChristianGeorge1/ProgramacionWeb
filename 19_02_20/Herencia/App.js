//Creando una función con clase
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Afectar al prototipo, osea a este objeto
Person.prototype.greet = function(){ //Agregando funcionalidad o propiedades
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

let john = new Person('John', 'Doe'); 
john.greet();//Mandamos a llamar

let jane = new Person('Jane',' Doe'); 
jane.greet();//Mandamos a llamar