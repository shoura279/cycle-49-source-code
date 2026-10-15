// router >> sub-app >> sub-router
const { Router } = require('express');
const authRouter = Router();
const authController = require('./auth.controller');
// req.url >> /register
// req.originalUrl >> /api/auth/register
authRouter.post('/register', authController.register);
authRouter.post('/login', (req, res, next) => { });


module.exports = {
  authRouter
};