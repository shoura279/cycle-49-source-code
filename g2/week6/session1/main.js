const express = require('express');
const {users} = require('./user.repo')
const fs = require('fs/promises');
// express on top of node [Http]
// http.createServer() + functionalities
const app = express();// createApplication()
// routing
// url - method
app.get('/user', (req, res) => {
    // res.writeHead(200, {"content-type": "application/json"});
    // res.write(JSON.stringify(users));
    // res.end();
    res.json(users);
});

app.post('/user', (req, res) => {
});

app.delete('/user/:id', async (req, res) => {
    // 1. get data from req
    const {id} = req.params
    // read user from file
    let users = await fs.readFile('./users.json', {encoding: 'utf-8'});
    users = JSON.parse(users);
    // 2. check user existence
    const userIdx = users.findIndex(// 0 1 2 3 4 >> -1
        (user) => {
            if (user.id === parseInt(id)) return true;
        });

    if (userIdx === -1) {
        return res.json({message: "user not found", success: false})
    }
    // 3. if yes, delete it from users
    users.splice(userIdx, 1);

    // write users after delete to file
    users = JSON.stringify(users);
    await fs.writeFile('./users.json', users);
    // 4. send response
    res.json({message: "user deleted successfully", success: true});
});

function bodyParser() {
    return (req, res, next) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            body = JSON.parse(body);// string => object
            req.body = body;
            next();
        })
    }
}

app.put('/user/:id',
    // middleware >> function have 3 arguments
    // bodyParser(),// (req,res,next) => {}
    express.json(),// (req,res,next) => {}
    async (req, res) => {
        // 1. get data from req
        const {id} = req.params;
        // read users from file
        let users = await fs.readFile('./users.json', {encoding: "utf-8"});
        users = JSON.parse(users);
        // 2. check user existence
        const userIdx = users.findIndex((user) => user.id === parseInt(id));
        if (userIdx === -1) return res.json({message: "user not found", success: false});
        // 3. if yes, update it
        Object.assign(users[userIdx], req.body);
        // write users to file
        users = JSON.stringify(users);
        await fs.writeFile('./users.json', users);
        // 4. send response
        res.json({message: "user updated successfully", success: true});
    }
);


app.listen(3000, () => console.log('Server is running on port 3000'));
