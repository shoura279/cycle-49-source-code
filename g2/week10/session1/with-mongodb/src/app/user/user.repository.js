import { ObjectId } from "bson";
import { db } from "../../common/db/connection.js";


export async function findUserExists(email, phone, userName) {
  const user = await db.collection('users').findOne({
    $or: [
      { email: { $eq: email, $ne: null, $exists: true } },
      { phone: { $eq: phone, $ne: null, $exists: true } },
      { userName: { $eq: userName, $ne: null, $exists: true } }
    ]
  });// 
  return user;// user | null 
}


export async function findUserByEmail(email) {
  const user = await db.collection('users').findOne({
    email: { $eq: email, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}


export async function findUserByPhone(phone) {
  const user = await db.collection('users').findOne({
    phone: { $eq: phone, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}

export async function findUserByUserName(userName) {
  const user = await db.collection('users').findOne({
    userName: { $eq: userName, $ne: null, $exists: true }
  });// 
  return user;// user | null 
}
// jpa >> ORM >> SELECT * FROM users WHERE id = ?
export async function findUserById(id) {
  const user = await db.collection('users').findOne({
    _id: new ObjectId(id)
  })
  // if(!user) throw new Error() >>> not allowed
  return user;
}


export async function createUser(data) {
  const { insertedId } = await db.collection('users').insertOne(data);
  return insertedId;// objectId | null
}
