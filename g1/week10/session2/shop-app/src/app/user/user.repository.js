import { User } from "../../common/db/user.model.js";

export async function findUserByEmail(email) {
  const user = await User.findOne({ email: email });// {} | Null
  return user;
}

export async function findUserById(id) {
  const user = await User.findOne({ _id: id });// {} | Null
  return user;
}


export async function createUser(data) {
  const user = await User.create(data);
  return user;
}

