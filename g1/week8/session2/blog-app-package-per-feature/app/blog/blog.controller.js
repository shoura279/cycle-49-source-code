const blogService = require('./blog.service');

async function createBlog(req, res, next) {
    try {
        const {userId, title, content} = req.body;
        const blog = await blogService.createBlog(userId, title, content);
        res.status(201).json({message: 'Blog created successfully', success: true, data: blog});
    } catch (error) {
        res.json({
            message: error.message, success: false
        })
    }
}

async function deleteBlog(req, res, next) {
    try {
        const {id, userId} = req.params;
        await blogService.deleteBlog(userId, id);
        res.json({
            message: 'Blog deleted successfully', success: true
        });
    } catch (error) {
        res.json({
            message: error.message, success: false
        });
    }
}

async function getBlogs(req, res, next) {
    const {userId} = req.params;
    const blogs = await blogService.getBlogs(userId);
    res.json({
        message: 'OK', success: true, data: blogs
    });
}


async function restoreBlog(req, res, next) {
    try {
        const {id, userId} = req.params;
        await blogService.restoreBlog(id, userId);
        res.json({
            message: 'Blog restored successfully', success: true,
        });
    } catch (error) {
        res.json({
            message: error.message, success: false
        });
    }
}

module.exports = {createBlog, deleteBlog, getBlogs, restoreBlog};