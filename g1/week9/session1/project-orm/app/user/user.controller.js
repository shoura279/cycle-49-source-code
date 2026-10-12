const userService = require('./user.service');


async function createUser(req, res, next) {
  try {

    const { userName, email, password } = req.body
    const createdUser = await userService.createUser(userName, email, password);
    res.status(201).json({ message: "user created successfully", success: true, data: createdUser });

  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}



async function getUser(req, res, next) {
  try {
    const user = await userService.getUser(req.params.id);
    return res.json({ message: "OK", success: true, data: user });
  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}

async function deleteUser(req, res, next) {
  try {
    const result = await userService.deleteUser(req.params.id);
    return res.json({ message: "OK", success: true, data: result });
  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}

async function restoreUser(req, res, next) {
  try {
    const result = await userService.restoreUser(req.params.id);
    return res.json({ message: "OK", success: true, data: result });
  } catch (error) {
    res.json({
      message: error.message,
      success: false
    })
  }
}

module.exports = {
  createUser,
  getUser,
  deleteUser,
  restoreUser
}