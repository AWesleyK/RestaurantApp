import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;

            // Connect to the database
            const db = await connectToDatabase();

            // Insert a new item to the appropriate menu
            console.log('formData:', formData);

            // find the menu and add the new item
            const result = await db.collection('Menus').updateOne(
                { menu: formData.menu }, 
                { $push: { items: formData } }
            );

            console.log('result:', result);

            // If no menu found, create a new one
            if (result.matchedCount === 0) {
                await db.collection('Menus').insertOne({ menu: formData.menu, items: [formData] });
            }
      
            res.status(201).json({ success: true, data: formData });
        } catch (error) {
            console.error('Error inserting menu item:', error);
            res.status(500).json({ success: false, message: 'Failed to add the menu item.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
