// - core-modules >> files >> JS >> functions
// filesystem
// const fs = require('node:fs');

// 1. how to read a file.
// fs.readFile('./data.txt', {flag: "r"}, (err, data) => {
//     // err && console.log(err.message);
//     // data && console.log(data);
//     if (err) return console.log(err.message);
//     console.log(data);// buffer
// });
// 2. how to write a file + how to create a file.
// a -> append - w -> write
// fs.writeFile('./data14.txt', 'uuu', {flag: 'a'}, (err, data) => {
// });
// 3. how to delete a file. - how to check a file exists.
// soft-delete / hard-delete
// if (fs.existsSync('./data-copy.txt')) {
//     fs.unlink('./data-copy.txt', (err) => {
//         if (err) return console.log(err.message);
//     });
// }
// 4. how to create a directory + nested directories.
// fs.mkdir(`./uploads/users/ka3bora/posts`, {recursive: true}, (err) => {
//     if (err) return console.log(err.message);
// });
// 5. how to delete a directory + nested directories.
// if (fs.existsSync('./users')) {
//     fs.rm(
//         './users',
//         {recursive: true},
//         (err) => {
//             if (err) return console.log(err.message);
//         }
//     );
// }
// events -> onClick -> trigger -> event listener / Function
// const {EventEmitter} = require('node:events');
// const event = new EventEmitter();

// 1. how to register an event listener.
// list of event names with their callback functions.
// add a new product to stock
// event.on('add-new-product', (product) => {
//     console.log(`New product added: ${product.name}`);
// });
// event.on('buy-product', (product) => {
//     console.log(`Product bought: ${product.name}`);
// });
// event.on('update-product', (product) => {
//     console.log(`Product updated: ${product.name}`);
// });
//
// console.log(event.eventNames());
// // buy a product from stock
// // update a product
// // 2. how to emit/trigger an event.
// event.emit('add-new-product', {name: "iphone18", price: 158000, stock: 100});
// event.emit('buy-product', {name: "Nike air force"});
// event.emit('update-product', {name: "iPhone18 duo"});
// stream
const {EventEmitter} = require('node:events');
const fs = require('node:fs');
const readStream = fs.createReadStream('./data.txt', {});

const writeStream = fs.createWriteStream('./data-copy.txt');


// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });
//
//
// readStream.on('end', () => {
//     writeStream.end();
// });
//
readStream.pipe(writeStream);
// 1. how to create a readable stream.
// 2. how to create a writable stream.
// 3. how to pipe streams. >> backpressure
// http
// 1. how to make a request.
// 2. how to create a server. [request, response]


// todo: COMMONJS - ES MODULE