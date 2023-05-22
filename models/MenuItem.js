import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  menu: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
  addOns: [
    {
      addOn: String,
      addOnPrice: Number,
    },
  ],
  subtractions: [
    {
      subtraction: String,
    },
  ],
});

export default mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema);
