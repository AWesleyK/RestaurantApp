import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  console.log('Entering menu handler'); // Add this line
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      console.log('Connected to database');
      const menuData = await db.collection('Menus').find({}).toArray();
      console.log('Fetched menu data:', menuData);

      return res.status(200).json({ success: true, data: menuData });
    } catch (error) {
      console.error('Error in menu route:', error);
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    // Unsupported method
    return res.status(405).json({ success: false, message: 'Method not supported' });
  }
}
