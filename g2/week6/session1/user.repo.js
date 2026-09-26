let users = [
    {id: 1, userName: "ka3bora", email: "k@g.com", password: "12345"},
    {id: 2, userName: 'rabe3', email: "r@g.com", password: "52453"},
    {id: 3, userName: "3laa", email: "3laa@g.com", password: "kadbfjgbfg"}
]

function createUser() {
    console.log('user created');
}

function getUser() {
    console.log('user fetched');
}

function updateUser() {
    console.log('user updated');
}

function deleteUser() {
    console.log('user deleted');
}

// top exported function [exported by default]
module.exports = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.users = users;
// module.exports = {
//     createUser,
//     getUser,
//     updateUser,
//     deleteUser
// }