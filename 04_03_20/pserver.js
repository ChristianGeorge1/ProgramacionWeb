const http = require('http'); 
const fs = require('fs');


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    let html = fs.readFileSync(__dirname + '/index.html')
    res.end(html)
}).listen(8000, '127.0.0.1')
/*
http.createServer((req, res)=>{ 
    res.writeHead(200, {'Contenr-Type': 'text/plain'});
    res.end('Hello world\n')
}).listen(8000, '127.0.0.1')
*/