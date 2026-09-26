const http = require('http');
const server = http.createServer((req, res) => {
    const {url, method} = req
    if (url === '/long' && method === 'GET') {
        for (let i = 0; i < 1000000; i++) {
            console.log(i);
        }
        res.end('request long ended.');
    } else if (url === '/short' && method === 'GET') {
        res.end('request short ended.');
    }
});

server.listen(3000);