const http = require('http');
let start = Date.now();
const server = http.createServer(
    (req, res) => {
        const {url, method} = req;
        if (url === '/long' && method === 'GET') {
            // logic of code get user data from db
            // assuming we have 100 thousand users
            // user 100 thousand
            for (let i = 1; i <= 100000; i++) {
                // search user in db
                console.log(i);
            }
            res.end(`long request ended at: ${Date.now() - start}`);
        } else if (url === '/short' && method === 'GET') {
            res.end(`short request ended at: ${Date.now() - start}`);
        }
    }
).listen(3000);
