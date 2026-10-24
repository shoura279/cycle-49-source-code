import { Router } from "express";
import { authRouter } from "./app/auth/auth.router.js";
import { productRouter } from "./app/product/product.router.js";
import { userRouter } from "./app/user/user.router.js";

export const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/auth', authRouter);