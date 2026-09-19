const http = require('node:http');
// send request to server1
http.request({
    method: "POST", port: 3001, host: 'localhost', path: '/user',
}, (res) => {

}).end()

// send request to server2
http.request('http://localhost:3002/order', (res) => {

}).end();

// send request to server3
http.request('http://localhost:3003/product', (res) => {

}).end();