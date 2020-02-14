function Greetr(){
    this.greeting = `Hello world!!`;
    this.greet = ()=> console.log(this.greeting);
}

module.exports = Greetr;

//Es un constructor que se exporta 