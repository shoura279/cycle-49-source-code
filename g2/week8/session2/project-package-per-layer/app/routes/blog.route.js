const { Router } = require('express');
const blogRouter = Router();
// original >> /api/blog/
blogRouter.post('/', (req, res, next) => { })
blogRouter.delete('/:id', (req, res, next) => { })
blogRouter.put('/:id', (req, res, next) => { })
blogRouter.get('/:id', (req, res, next) => { })


module.exports = {
  blogRouter
};