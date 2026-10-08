const {Router} = require('express');
const blogRouter = Router();
const blogController = require('./blog.controller');

// blog
blogRouter.post('/', blogController.createBlog);


blogRouter.put('/:id', () => {
});

blogRouter.delete('/:id/:userId', blogController.deleteBlog);

blogRouter.get('/get-all-blogs/:userId', blogController.getBlogs);

blogRouter.put('/restore/:id/:userId', blogController.restoreBlog);

module.exports = blogRouter;