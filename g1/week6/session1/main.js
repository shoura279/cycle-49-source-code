const {users} = require('./user.repository')
const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const app = express();// top exported function from file createApplication() return app


// routing >> url - method
app.get('/user', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write(JSON.stringify(users));
    // res.end();
    res.json({
        message: "done",
        success: true,
        data: {users}
    });// null -> ''
});


app.post('/user', (req, res) => {

    // logic of code to create user
});

// fit with any id
app.delete('/user/:id',
    async (req, res) => {
        // 1. get id from req params
        const {id} = req.params;
        // read users from users.json file
        let users = await fs.readFile('./users.json', {encoding: 'utf-8'});
        users = JSON.parse(users);
        // 2. find user by id >> search on user with id = 1 >> 0 >> 1 >> 2 >> 3 >> 4 >>> -1
        const userIdx = users.findIndex(
            (user) => {
                console.log({userId: user.id, paramsId: id});
                if (user.id === parseInt(id))
                    return true;// 3
            }
        );
        console.log(userIdx);
        if (userIdx === -1) {
            return res.json({message: "user not found", success: false})
        }
        // 3. if yes, then delete this user
        users.splice(userIdx, 1);
        // write user after delete
        users = JSON.stringify(users);
        await fs.writeFile('./users.json', users);
        // 4. send response
        return res.json({
            message: "user deleted successfully",
            success: true
        })
    }
);

// function parseBody(req, res, next) {
//     let body = '';
//     req.on('data', (chunk) => {
//         body += chunk;
//     });
//     req.on('end', () => {
//         body = JSON.parse(body);
//         req.body = body;
//         next();// next function
//     });
// }

app.put('/user/:id',
    express.json(),
    async (req, res) => {
        // 1. get data from req
        const {id} = req.params
        // read users from users.json file
        let users = await fs.readFile('./users.json', {encoding: 'utf-8'});
        users = JSON.parse(users);
        // 2. find user exist
        const userIdx = users.findIndex((user) => user.id === parseInt(id));
        if (userIdx === -1) {
            return res.json({message: "user not found", success: false})
        }
        // 3. if yes, update user
        Object.assign(users[userIdx], req.body);
        users = JSON.stringify(users);
        await fs.writeFile('./users.json', users);
        // 4. send response
        return res.json({
            message: "user updated successfully",
            success: true
        });
    }
)

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

