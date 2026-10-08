const {Router} = require('express');
const userRouter = Router();

// req.url >> /1
// user
// url >> /user/:id
userRouter.put('/:id', () => {
});
userRouter.get('/:id', () => {
});
userRouter.delete('/:id', () => {
});


module.exports = userRouter;