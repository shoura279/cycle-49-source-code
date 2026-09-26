const http = require('http');

let start = Date.now();

http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 1 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 2 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request3 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 4 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 5 ended at:', Date.now() - start)
    })
}).end();
http
    .request('http://localhost:3000', (res) => {
        res.on('data', () => {
        });
        res.on('end', () => {
            console.log('request 6 ended at:', Date.now() - start)
        })
    }).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 7 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 8 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 9 ended at:', Date.now() - start)
    })
}).end();
http.request('http://localhost:3000', (res) => {
    res.on('data', () => {
    });
    res.on('end', () => {
        console.log('request 10 ended at:', Date.now() - start)
    })
}).end();