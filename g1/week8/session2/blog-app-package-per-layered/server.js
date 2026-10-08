const express = require('express');
const authRouter = require("./app/routes/auth.route");
const userRouter = require("./app/routes/user.route");
const blogRouter = require("./app/routes/blog.route");
const app = express();

// parse incoming request body >> object
app.use(express.json());

// req.url >> /auth/register
// url >> /auth/register >> /register

// request start with auth
app.use('/auth', authRouter);

// req.url >> /user/1

// request start with user
app.use('/user', userRouter);

// request start with blog
app.use('/blog', blogRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});