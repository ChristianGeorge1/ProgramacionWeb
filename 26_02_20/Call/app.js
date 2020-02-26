var obj = {  //Creamos el objeto
    name: 'John Doe', 
    greet: function(param1){ 
        console.log(`Hello ${this.name} ${param1}`);
    }
}
var param1 = 'how are you?'

obj.greet(param1); //Mandamos a llamar el objeto
obj.greet.call({name: 'Jane Doe'}, param1) //Se sustituye solamente en la función
obj.greet.apply({name: 'Jane Doe'}, [param1])