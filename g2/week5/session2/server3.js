const http = require('node:http');

const server = http.createServer(handler);

function handler(req, res) {
    console.log('received request');
    console.log(req.url);
    console.log(req.method);
}

server.listen(3003, () => console.log('server is running on port 3003'));