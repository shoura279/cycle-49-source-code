import { Router } from "express";
import * as userController from './user.controller.js';

export const userRouter = Router();

userRouter.get('/:id', userController.getProfile)