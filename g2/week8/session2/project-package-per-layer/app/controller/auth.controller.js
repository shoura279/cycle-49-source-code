const authService = require('../service/auth.service');

async function register(req, res, next) {
  try {
    const { userName, email, password } = req.body;
    const createdUser = await authService.register(userName, email, password);
    res.status(201).json({
      message: "user created successfully",
      success: true,
      data: createdUser
    });
  } catch (err) {
    return res.json({
      message: err.message,
      success: false
    })
  }
}

module.exports = {
  register
}