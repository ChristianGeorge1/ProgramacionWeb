//OBJECT PROPERTIES METHODS
/*var obj = { 
    greet: 'Hello',
    greet2: 'Hello2',
    saludo: () => { 
        console.log('¿Cómo estas?');   
    }
}
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet2'
console.log(obj[prop]);

//Invocando la función
obj['saludo'](); //Invocar de 1manera
obj.saludo(); //Invocar de la segunda manera
*/


//FUNCTIONS AND ARRAYS
var arr = []; 

arr.push(()=>{console.log('Hello world 1');})
arr.push(()=>{console.log('Hello world 2');})
arr.push(()=>{console.log('Hello world 3');})

arr.forEach((item)=>{item();})