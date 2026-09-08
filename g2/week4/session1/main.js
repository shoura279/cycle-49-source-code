// how JS run? Sync or Async
// Cycle place order
// Cycle send money
// Cycle add product
// cycle of update user
// 1. check user exists into DB
// 2. update user into DB
// 3. send email to user notify user on email
// 4. send response to user
let start = Date.now();// get current time: 7:30
// layered arch >> layer DB >> get data from DB null | data
function checkUserExists() {
    return new Promise((resolve, reject) => {
        console.log('check user exists started at:', Date.now() - start); // 0
        setTimeout(function () {
                console.log('check user exists finished at', Date.now() - start);
                let data = {userName: "ka3bora", password: "12345"};// come from DB
                resolve(data);
            }, 5000// 5 seconds
        );
    });
}

function updateUser() {
    return new Promise((resolve, reject) => {
        console.log('update user started at:', Date.now() - start);
        setTimeout(function () {
                console.log('update user finished at', Date.now() - start);
                resolve();
            }, 3000// 3 seconds
        );
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        console.log('sendEmail started at:', Date.now() - start);
        setTimeout(function () {
                console.log('sendEmail finished at', Date.now() - start);
                resolve();
            }, 3000// 3 seconds
        );
    })
}

function sendResponse() {
    return new Promise((resolve, reject) => {
        console.log('send response started at:', Date.now() - start);
        setTimeout(function () {
                console.log('send response finished at', Date.now() - start)
                resolve();
            }, 0,// at least time
        );
    })
}

// checkUserExists()
//     .then(updateUser)
//     .then(sendEmail)
//     .then(sendResponse)
//     .catch(err => console.log(err));


// service
async function register() {
    try {
        const result = await checkUserExists();// null | {}
        if (result) throw new Error('user already exists');
        await updateUser();// fail
        await sendEmail();// fail
        await sendResponse();
    } catch (error) {
        console.log(error);
    }
}

async function login() {
    try {
        const result = await checkUserExists();// fail
        if (result === null) throw new Error('user not found');
        console.log('login success', result);
    } catch (error) {
        console.log(error.message);
    }
}

// login()
function ayhaga() {
    return new Promise((resolve, reject) => {
        let data = {userName: "ka3bora", password: "12345"};
        if (data === null) return reject('data is null');
        resolve(data);
        console.log('aaa');
    });
}

ayhaga()
    .then(data => console.log(data))
    .catch(err => console.log(err));