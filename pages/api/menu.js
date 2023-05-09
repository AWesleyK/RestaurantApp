import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      console.log('Connected to database'); // Add this line
      const menuData = await db.collection('menu').find({}).toArray();
      console.log('Fetched menu data:', menuData); // Add this line

      return res.status(200).json({ success: true, data: menuData });
    } catch (error) {
      console.error('Error in menu route:', error); // Add this line
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    // Unsupported method
    return res.status(405).json({ success: false, message: 'Method not supported' });
  }
}
