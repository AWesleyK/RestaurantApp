import { connectToDatabase } from '../../lib/mongodb';
import MenuItem from '../../models/MenuItem';


export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const formData = req.body;
  
        // Connect to the database
        const db = await connectToDatabase();
  
        // Create a new menu item
        const newMenuItem = new MenuItem(formData);
        const savedMenuItem = await newMenuItem.save();
  
        res.status(201).json({ success: true, data: savedMenuItem });
      } catch (error) {
        console.error('Error inserting menu item:', error);
        res.status(500).json({ success: false, message: 'Failed to add the menu item.' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
  }
  