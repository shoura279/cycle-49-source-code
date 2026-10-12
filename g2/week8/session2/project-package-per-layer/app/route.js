const { Router } = require('express');
const { authRouter } = require("./routes/auth.route");
const { blogRouter } = require("./routes/blog.route");
const { userRouter } = require("./routes/user.route");
const router = Router();
// req.url = '/auth/register'
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/blog', blogRouter);


module.exports = { router };