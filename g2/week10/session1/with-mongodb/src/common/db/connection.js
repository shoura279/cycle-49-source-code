import { MongoClient } from 'mongodb';
// establish connection to Server DB.  DB1 - DB2 - DB3 - DB4
const client = new MongoClient('mongodb://localhost:27017');

// select DB:
export const db = client.db('c49_g2');

// shell >> db.createCollection('users');
// client >> db.createCollection('users');

// db.users.insertOne({user data});
// db.collection('users').insertOne({ user data });
