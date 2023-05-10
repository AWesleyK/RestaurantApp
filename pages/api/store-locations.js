// pages/api/store-locations.js
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const storeLocationsCollection = db.collection('StoreLocations');

    const storeLocations = await storeLocationsCollection.find({}).toArray();

    await client.close();

    res.status(200).json({ data: storeLocations });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
