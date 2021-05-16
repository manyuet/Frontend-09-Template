const http = require('http');
// const { request } = require('node:http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk)=> {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('hello world\n');
    });
}).listen(8088);
console.log('server started');