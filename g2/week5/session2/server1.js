const http = require('node:http');
const fs = require('node:fs');
const server = http.createServer(handler);

function handler(req, res) {
    if (req.url === '/user' && req.method === 'GET') {
        // 1. get users' data
        const users = fs.readFileSync('./users.json', {encoding: "utf-8"});
        res.writeHead(200, {"content-type": "application/json"});
        res.write(users);
        res.end();
    } else if (req.url === '/user' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            // 1. read all user from file.
            let users = fs.readFileSync('./users.json', {encoding: "utf-8"});
            // 2. convert users data to array of Object.
            users = JSON.parse(users);
            // 3. convert body to Object.
            body = JSON.parse(body);
            // todo: check if user already exist.
            // 4. push new user to array of Object.
            users.push(body);
            // 5. convert array of Object to string.
            users = JSON.stringify(users);
            // 6. write new array of Object to file.
            fs.writeFileSync('./users.json', users);
            // 7. send response
            res.writeHead(201, {"content-type": "application/json"});
            res.write(JSON.stringify({message: "user created successfully", success: true}));
            res.end();
        });
    } else if (req.url === '/user' && req.method === 'PUT') {
    } else if (req.url === '/user' && req.method === 'DELETE') {
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "invalid url or method", success: false}));
        res.end();
    }
}

// assign this server to a specific port
server.listen(3001, () => console.log('server is running on port 3001'));