import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function testDbConnection() {
  console.log('Testing database connection with URI:', uri);

  try {
    const client = new MongoClient(uri, options);
    await client.connect();

    console.log('Successfully connected to the database');
    await client.close();
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
  }
}

testDbConnection();
