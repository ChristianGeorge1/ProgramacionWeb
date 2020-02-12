//FUNCTION EXPRESSIONS

/*function greet(){ //Creación de la función
    console.log('hi');
}
greet();//Mandar a llamar la function
*/

//ARROW FUNCTION 
let greet = () =>{ 
    console.log(`Hi`); 
}
greet();

//FUNCTIONS ARE FIRST-CLASS 
let logGreeting = (fn) =>{
    fn();
}
logGreeting(greet);

//FUNCTIONS EXPRESSIONS ON THE FLY
logGreeting = (()=> {console.log(`Hi`)});
