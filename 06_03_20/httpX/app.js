const request = require('request'); //Modulo
const convert = require('fahrenheit-to-celsius');


const url = 'https://api.darksky.net/forecast/add880fee823c4a50da5b84764484216/19.2433,-103.725?lang=es' //Nuestra api

request({url, json: true}, (error, response)=>{  //Cuando el key y value tienen el mismo nombre y valor se puede quedar igual.
   
    console.log(response.body)
    let convertido = convert(response.body.currently.temperature).toFixed(2)
    let temperaturaF = response.body.currently.temperature;
    console.log(`La temperatura en Fahrenheit ${temperaturaF}`)
    console.log(`La temperatura en Celsius:  ${convertido}`)

    console.log(response.body.daily.data[0].summary)
    let convertir = JSON.stringify(response.body.hourly.data, null, 1); //Convertir a imprimirlo bonito
    console.log(convertir);
    
})