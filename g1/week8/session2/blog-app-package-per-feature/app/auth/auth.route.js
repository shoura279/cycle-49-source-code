const {Router} = require('express');
const authRouter = Router();
const authController = require('./auth.controller');
// req.url >> /register


// req.originalUrl >> /auth/register

// authentication
// url >> /auth/register
authRouter.post('/register', authController.register);

authRouter.post('/login', () => {
});


module.exports = authRouter;