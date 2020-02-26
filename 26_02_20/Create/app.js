var person = {  //Nuestro objeto
    firstname: '', 
    lastname: '', 
    greet: function(){ //Función que concatena el firstname y el lastname
        return this.firstname + ' ' + this.lastname;
    }
}

let john = Object.create(person); //Crear un objetoy mandar el objeto dentro del parentesis. 
john.firstname = 'John';  //Llenamos los datos, primer nombre
john.lastname = 'Doe' //Segundo nombre

let jane = Object.create(person); //Crear un objeto y mandar el objeto dentro del parentesis
jane.firstname = 'Jane';  //Llenamos los datos
jane.lastname = 'Doe'; //Llenamos los datos

console.log('Hi, I am ' + john.greet());
console.log('Hi, I am ' + jane.greet());
