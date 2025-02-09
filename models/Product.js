const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price must be a positive number'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  stock: {
    type: Number,
    required: [true, 'Product stock is required'],
    default: 0,
  },
  image: {
    type: String,
    default: 'https://picsum.photos/id/2/300',
  },
  rating: {
    type: Number,
    default: 4.5,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot exceed 5'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

// #1d898e