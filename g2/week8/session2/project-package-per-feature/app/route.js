const { Router } = require('express');
const authRouter = require('../app/auth/auth.route');
const userRouter = require('../app/user/user.route');
const blogRouter = require('../app/blog/blog.route');
const router = Router();
// req.url = '/auth/register'
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/blog', blogRouter);


module.exports = { router };