// establish connection to mongodb
// driver broker between BE server -> DB server
import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017');

// switch to specific DB -> test
export const db = client.db('c49_g1');
