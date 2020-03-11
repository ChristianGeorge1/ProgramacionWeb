const randomNum = require('random-num'); //Modulo de numero random
const request = require('request'); //Modulo de request
const address = require('./address.js');

let num = randomNum(1, 88) //Un numero random
let num2 = randomNum(1, 19);

const url = `https://swapi.co/api/people/${num}/` //Url de la api
const urlTemperature = 'https://api.darksky.net/forecast/add880fee823c4a50da5b84764484216/19.2433,-103.725?lang=es'
const urlAddress = 'http://www.mapquestapi.com/geocoding/v1/address?key=skDhBDWHK487c5vZTLcfwOtDHNyP19Ue&location='+address[num2].address.street;


request({url: url,  json: true}, (error, response)=>{  //Metodo request para parsear mi objeto
    //console.log(response.body)
    //console.log(`Name: ${response.body.name}`)
    
    request({url: urlAddress, json: true}, (error, response)=>{ 
        console.log(response.body.results[0].providedLocation)
    })

})
//console.log()
/*
console.log(num)
console.log(num2)
*/