// test APIs / server
const http = require('http');
// send request to server 2
http.request({
    host: 'localhost',
    port: 3002,
    method: 'POST',
    path: '/user'
}, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    });
}).end();

// send request to server 3
http.request('http://localhost:3003/product', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    });
}).end();

// send request to server 1
http.request('http://localhost:3001/order', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    });
}).end();