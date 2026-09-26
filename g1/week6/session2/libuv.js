const crypto = require('node:crypto');
let start = Date.now();
// 12345 >>> fioabsdgouebruofdwbedig4wur0bfdg
crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
    console.log('crypto op 1 ended at:', Date.now() - start)
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
    console.log('crypto op 2 ended at:', Date.now() - start)
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
    console.log('crypto op 3 ended at:', Date.now() - start)
});

crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
    console.log('crypto op 4 ended at:', Date.now() - start)
});