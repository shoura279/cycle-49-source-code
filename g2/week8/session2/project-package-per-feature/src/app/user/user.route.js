const { Router } = require('express')
const userRouter = Router()

userRouter.get('/:id', (req, res, next) => { })
userRouter.put('/:id', (req, res, next) => { })
userRouter.delete('/:id', (req, res, next) => { })


module.exports = {
  userRouter
};
