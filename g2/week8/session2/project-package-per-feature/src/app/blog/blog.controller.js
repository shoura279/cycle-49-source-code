const blogService = require('./blog.service');

async function createBlog(req, res, next) {
  try {
    const { title, content, userId } = req.body;
    const createdBlog = await blogService.createBlog(title, content, userId);
    res.status(201).json({
      message: "blog created successfully",
      success: true,
      data: createdBlog
    })
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    })
  }
}


async function getSpecificBlog(req, res, next) {
  try {
    const { id } = req.params;
    const blog = await blogService.getSpecificBlog(id);
    res.json({
      message: "OK",
      success: true,
      data: blog
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}




async function deleteBlog(req, res, next) {
  try {
    // get data from req
    const { id, userId } = req.params;

    // call service
    await blogService.deleteBlog(id, userId);

    // send response
    res.json({
      message: "blog deleted successfully",
      success: true
    });

  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}


async function restoreBlog(req, res, next) {
  try {
    // get data from req
    const { id, userId } = req.params;

    // call service
    await blogService.restoreBlog(id, userId);

    // send response
    res.json({
      message: "blog restored successfully",
      success: true
    });

  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}


module.exports = {
  createBlog,
  getSpecificBlog,
  deleteBlog,
  restoreBlog
}