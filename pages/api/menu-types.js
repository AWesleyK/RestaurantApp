import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const menuData = await db.collection('Menus').find({}, { projection: { menu: 1 } }).toArray();

      // Extract unique menu types
      const menuTypes = [...new Set(menuData.map(item => item.menu))];

      return res.status(200).json({ success: true, data: menuTypes });
    } catch (error) {
      console.error('Error in menu-types route:', error);
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    // Unsupported method
    return res.status(405).json({ success: false, message: 'Method not supported' });
  }
}
