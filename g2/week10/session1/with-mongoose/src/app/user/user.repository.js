

import { User } from "../../common/db/user.model.js";


export async function findUserExists(email, phone, userName) {
  const user = await User.findOne({
    $or: [
      { email: { $eq: email, $ne: null, $exists: true } },
      { phone: { $eq: phone, $ne: null, $exists: true } },
      { userName: { $eq: userName, $ne: null, $exists: true } }
    ]
  });// 
  return user;// user | null 
}


export async function findUserByEmail(email) {
  const user = await User.findOne({
    email: { $eq: email, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}


export async function findUserByPhone(phone) {
  const user = await User.findOne({
    phone: { $eq: phone, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}

export async function findUserByUserName(userName) {
  const user = await User.findOne({
    userName: { $eq: userName, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}
// jpa >> ORM >> SELECT * FROM users WHERE id = ?
export async function findUserById(id) {
  const user = await User.findOne({
    _id: id
  })
  // if(!user) throw new Error() >>> not allowed
  return user;
}


export async function createUser(data) {

  // create(obj) >> insertOne;
  // create([obj,obj]) >> insertMany
  const userData = await User.create(data);
  return userData;// user 
}
