const http = require('node:http');


const server = http.createServer(handler);

function handler(req, res) {
    console.log('request received');
    console.log(req.url);
    console.log(req.method);
    // handle response
    res.write('done from server 2');
    res.end();
}

server.listen(3002, () => {
    console.log('server is running on port 3002')
});