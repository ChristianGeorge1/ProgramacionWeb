function Greetr(){
    this.greeting = `Hello world`;
    this.greet = ()=> console.log(this.greeting);
}

module.exports = new Greetr();

//Es una clase que tienen diferentes valores y lo exportamos como clase y se recibe como objeto :D 