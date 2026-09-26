// recap on http - core-module
// 1. handle http requests.
// 2. handle create servers.
const http = require('node:http');

function handler(req, res) {
    // routing
    // handle actions >> url - method
    const {url, method} = req;
    if (url === '/user' && method === 'POST') {
        // logic of code handle create user
    } else if (url === '/user' && method === 'GET') {
        // logic of code handle get user
    } else if (url === '/user' && method === 'DELETE') {
        // handle delete user
    } else if (url === '/user' && method === 'PUT') {
        // handle update user
    } else {
        // handle 404 invalid routing
    }
}

const server = http.createServer(handler);


// assign to specific port
server.listen(3000, () => console.log('server is running on port 3000'));

// core-modules >> third party modules >> Github/gitlab
// express >> lib built on top of node [http]
// http + functionality >> implement http server

// node package manager >> NPM
// ka3bora >> rabe3 >> 3laamedany >> abdomomya
//                                            >> ali
//                                            >> ahmed
//                                            >> mahmoud
//
//                                            >> body
// NPM CI
// PNPM >> pnpm i express >> github
// YARN >> yarn add express >> github