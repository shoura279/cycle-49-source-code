let users = [
    {id: 1, name: "ka3bora", email: "ka3bora@gmai.com", password: "12345"},
    {id: 2, name: "rabe3", email: "rabe3@gmai.com", password: "12345"},
    {id: 3, name: "3laa", email: "3laa@gmai.com", password: "12345"},
    {id: 4, name: "abdomomya", email: "abdomomya@gmai.com", password: "12345"},
]

function createUser() {
    console.log('user created')
}

function getUser() {
    console.log('user fetched')
}

function deleteUser() {
    console.log('user deleted')
}

function updateUser() {
    console.log('user updated')
}

module.exports = createUser;// function
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
module.exports.users = users;
// module.exports = {
//     createUser,
//     getUser,
//     deleteUser,
//     updateUser
// }