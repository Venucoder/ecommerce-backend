const mongoose = require('mongoose');
const Product = require('./models/Product');
const dummyData = require('./dummyData.json');
const dotenv = require('dotenv');

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(dummyData);
    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();