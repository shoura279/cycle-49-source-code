import { db } from "../../common/db/connection.js";

// SELECT * FROM users WHERE email = ?

export async function findUserByEmail(email) {
  const user = await db.collection('users').findOne({ email: { $exists: true, $ne: null, $eq: email } });// {} | null
  return user;// doc|null
}

export async function findUserByPhone(phone) {
  const user = await db.collection('users').findOne({ phone: { $exists: true, $ne: null, $eq: phone } });// {} | null
  return user;// doc|null
}

export async function createUser(data) {
  const { insertedId } = await db.collection('users').insertOne(data);
  return insertedId;
}