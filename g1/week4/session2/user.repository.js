let users = [
    {id: 1, userName: "ka3bora", age: 25},
    {id: 2, userName: "rabe3", age: 30},
    {id: 3, userName: 'alaamedany', age: 26},
    {id: 4, userName: 'abdomomy', age: 24}
];

function createUser(user) {
    user.id = users.length + 1;
    users.push(user);
}

function deleteUser(id) {
}

function findUser(id) {
}

module.exports = {
    users,
    createUser,
    deleteUser,
    findUser,

}