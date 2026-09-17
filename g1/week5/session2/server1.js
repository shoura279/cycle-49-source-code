// core-module >> http
const http = require('node:http');
const fs = require('node:fs');
// send request
// request stream


const server = http.createServer(handler);

function handler(req, res) {
    // routing
    // how to know req is coming to create user
    // how to know req is coming to get user
    // how to know req is coming to delete user
    const {url, method} = req;
    if (url === '/user' && method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {

            // 1. read all data from file >> "[{name:"ka3bora",...}]"
            let users = fs.readFileSync('./db/users.json', {encoding: 'utf-8'});
            // 2. parse data from file >> [{name:"ka3bora",...}]
            users = JSON.parse(users);// [{}]
            // 3. push new user to array >> [{name:"ka3bora",...}, {name:"rabe3",...}]
            body = JSON.parse(body);
            users.push(body);
            // 4. convert array to string >> "[{name:"ka3bora",...}, {name:"rabe3",...}]"
            users = JSON.stringify(users);
            // 5. write file with new data
            fs.writeFileSync('./db/users.json', users);
            // 6. send response
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: "user created successfully", success: true}));
        });
    }
    else if (url === '/user' && method === 'GET') {
        let data = fs.readFileSync('./db/users.json', {encoding: 'utf-8'});
        data = JSON.parse(data);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "done", success: true, data: data}));
    }
    else if (url === '/user' && method === 'DELETE') {
        // logic to delete user
    }
    else {
        // response handle invalid request
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'invalid request', success: false}));
        res.end();
    }
}

server.listen(3001, () => {
    console.log('server is running on port 3001')
});

