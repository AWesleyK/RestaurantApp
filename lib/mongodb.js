import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Set the timeout to 30 seconds
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 60000, // Set the timeout to 60 seconds
};

let client;

export async function connectToDatabase() {
  if (!client) {
    console.log('Connecting to database with URI:');
    try {
      client = new MongoClient(uri, options);
      await client.connect();
      console.log('Connected to database');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }

  return client.db();
}
