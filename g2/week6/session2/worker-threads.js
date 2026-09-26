const crypto = require('node:crypto');
let start = Date.now();

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 1 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 2 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 3 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 4 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 5 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 6 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 7 ended at:', Date.now() - start);
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', () => {
    console.log('crypto 8 ended at:', Date.now() - start);
});


