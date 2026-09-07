// 1. how js handle Fun? Sync/Async
// line by line
// 1 2 3 4 5 6 7 8 9 10
// Sync -> blocking
// Async -> non-blocking -> waste time
// 1. cycle for Update user
// - check user exist or not
// - update user into DB
// - send email to user -> notify user
// - send response to user
const start = Date.now();// 07-09-2026T12:30:44

function checkUserExist() {
    return new Promise((resolve, reject) => {
        console.log('fn: checkUserExist started at:', Date.now() - start)// 2m
        setTimeout(
            function () {
                console.log("check user exist");
                console.log('fn: checkUserExist ended at:', Date.now() - start)// 2m
                let data = {username: "ka3bora", age: 25};
                resolve(data);
            },
            5000// 5s -> 5000ms
        );
    })
}

function updateUser() {
    return new Promise((resolve, reject) => {
        console.log('fn: updateUser started at:', Date.now() - start)// 2m
        setTimeout(
            function () {
                console.log("update user");
                console.log('fn: updateUser ended at:', Date.now() - start)// 2m
                resolve();
            },
            3000
        );
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        console.log('fn: sendEmail started at:', Date.now() - start)// 2m
        setTimeout(
            function () {
                console.log("send email");
                console.log('fn: sendEmail ended at:', Date.now() - start)// 2m
                resolve();
            },
            1500
        );
    })
}

function sendResponse() {
    return new Promise((resolve, reject) => {
        console.log('fn: sendResponse started at:', Date.now() - start)// 2m
        setTimeout(
            function () {
                console.log("send response");
                console.log('fn: sendResponse ended at:', Date.now() - start)// 2m
                resolve();
            },
            5000// at least time
        );
    })
}

// JS run Sync -> execution
// wanting list -> libUV
// checkUserExist();// 0s
// check user exist -> libUV -> DB result
// checkUserExist(function () {
//     updateUser(function () {
//
//     });
// });
// callback hell

// updateUser()
// sendEmail()
// sendResponse()
// console.log(1);
// console.log(2);
// console.log(3);
// promise -> object
// get profile
checkUserExist().then(
    (data) => {
        console.log(data);// get profile
    }
);

// checkUserExist().then(
//     (data) => {
//         sendEmail()
//     }
// );
// function return promise
// 1. then - catch
// 2. async/await

async function getProfile() {
    await checkUserExist();
    console.log('done');
}

async function updateService() {
    const data = await checkUserExist();
    console.log(data);
    await updateUser();
    await sendEmail();
    await sendResponse();// nodeJS -> macro task VS micro tasks
    console.log('done');
}

updateService();
