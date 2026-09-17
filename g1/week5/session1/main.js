// - Core modules >> File >> JS >> Functions
// 1. fs
// const fs = require('node:fs');
// const path = require('node:path');

// fs.readFile(path.join(__dirname, "/data.txt"), (err, data) => {
//     err && console.log(err);//
//     console.log(data);
// });
// write-file
// fs.writeFile(
//     path.join(__dirname, './data.txt'),
//     'hello core module 2\n',
//     {flag: 'a'},// w >> overwrite - a >> append
//     (err) => {
//         err && console.log(err);
//     }
// );
// // how to create an empty file
// fs.writeFile(path.join(__dirname, './joo.txt'), '', (err) => {
//     err && console.log(err);
// });

// how to create a folder
// fs.mkdir(
//     path.join(__dirname, './users/ka3bora/profile-pic'),
//     {recursive: true},
//     (err) => {
//         err && console.log(err);
//     }
// );
// fs.rm(
//     path.join(__dirname, './data.txt'),
//     {recursive: true},
//     (err) => {
//         err && console.log(err);
//     }
// );

// fs.unlink(path.join(__dirname, './joo.txt'), (err) => {
//     err && console.log(err);
// });
// 2. events
// create event assign function >> event >> call function
// event onClick >> execute function
// implement functions >> run when an event is triggered/occured

// const {EventEmitter} = require('node:events');
// const event = new EventEmitter();
//
// // console.log(event.eventNames());
//
// // register event
// event.on('onClick', function () {
//     console.log('event onClick triggered');
// });
// // console.log(event.eventNames());
//
// event.on('new-product', function () {
//     console.log('event new-product triggered');
// });
// // console.log(event.eventNames());
//
// // trigger event - emit()
// event.emit('onClick');

// 3. stream
// const fs = require('node:fs');
// const path = require("node:path");
// const {EventEmitter} = require('node:events');
// const readStream = fs.createReadStream(
//     path.join(__dirname, './data.txt'),
//     {}
// );
// const writeStream = fs.createWriteStream(
//     path.join(__dirname, './data-copy.txt'),
//     {}
// );
//
//
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);// chunk , chunk , chunk ,
// });
// // 4
// readStream.on('end', () => {
//     writeStream.end();
// });
// // 5
// readStream.on('close', () => {
//     console.log('file is closed');
// });
// stream stages:
// 1. open file -> OS emit event -> open
// 2. ready -> OS prepare a file to stream [chunks] -> ready for stream
// 3. data -> OS emit data event with a chunk of data
// 3.1 trigger data + chunk1, data + chunk2, data + chunk3 ... multiple times
// 4. end -> OS emit end event
// 5. close -> OS emit close event
// 4. http
const http = require('node:http');
const server = http.createServer(
    (req, res) => {
        // req -> obj -> EventEmitter -> readStream
        // res -> obj -> EventEmitter -> writeStream
        res.write('hello from our server.\n');// write to client
        res.write('hello from our server.');// write to client
        res.write('hello from our server.');// write to client
        res.write('hello from our server.');// write to client
        res.write('hello from our server.');// write to client
        res.write('hello from our server.');// write to client
        res.write('hello from our server.');// write to client
        res.end();// end stream
    }
);
server.listen(3000);// assign server to port 5000 CPU
// 3306 -> DB -> mysql
// 5432 -> DB -> postgres
// 27017 -> DB -> mongoDB
