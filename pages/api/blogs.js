import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const blogCollection = db.collection('Blogs');

    const blogs = await blogCollection.find({}).toArray();

    await client.close();

    res.status(200).json({ data: blogs });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
