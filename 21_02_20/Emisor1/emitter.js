function Emitter(){
    this.events = {};
}
//Método para guardar en un arrays.
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
//Método para mandar o invocar los arrays.
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        })
    }
}
module.exports = Emitter;