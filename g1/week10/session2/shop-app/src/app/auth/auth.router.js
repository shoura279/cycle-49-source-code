import { Router } from "express";
import * as authController from './auth.controller.js';
export const authRouter = Router();

authRouter.post('/register', authController.register);