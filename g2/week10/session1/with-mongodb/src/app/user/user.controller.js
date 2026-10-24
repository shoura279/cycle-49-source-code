import * as userService from './user.service.js';

export async function getProfile(req, res, next) {
  try {
    const { id } = req.params;

    const user = await userService.getProfile(id);
    res.json({ message: "OK", success: true, data: user });
  } catch (error) {
    next(error);// error - req - res - next
  }
}