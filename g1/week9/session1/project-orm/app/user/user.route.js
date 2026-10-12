const { Router } = require("express");
const userController = require('./user.controller');
const userRouter = Router();

userRouter.post('/create', userController.createUser);
userRouter.get('/:id', userController.getUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.patch('/:id', userController.restoreUser);

module.exports = {
  userRouter
}