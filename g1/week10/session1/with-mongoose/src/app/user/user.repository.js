import { User } from "../../common/db/user.model.js";

// SELECT * FROM users WHERE email = ?

export async function findUserByEmail(email) {
  // const user = await db.collection('users').findOne({ email: { $exists: true, $ne: null, $eq: email } });// {} | null
  const user = await User.findOne({ email: email });
  return user;// doc|null
}

export async function findUserByPhone(phone) {
  // const user = await db.collection('users').findOne({ phone: { $exists: true, $ne: null, $eq: phone } });// {} | null
  const user = await User.findOne({ phone: phone });
  return user;// doc|null
}

export async function createUser(data) {
  // const { insertedId } = await db.collection('users').insertOne(data);
  // return insertedId;
  const user = await User.create(data);
  return user;
}