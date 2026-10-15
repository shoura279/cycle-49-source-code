import { Router } from "express";
import * as userController from './user.controller.js';
export const userRouter = Router();

userRouter.post('/create', userController.createUser);
userRouter.get('/:id', userController.getUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.patch('/:id', userController.restoreUser);

// module.exports = {
//   userRouter
// }