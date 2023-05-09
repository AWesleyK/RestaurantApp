import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
  }

  return client.db();
}
