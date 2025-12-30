const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGO_URI from env:', process.env.MONGO_URI);  // <-- This line will show us the truth

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/issue-tracker';
    console.log('Attempting to connect to:', uri ? 'Cloud MongoDB (Atlas)' : 'Local MongoDB');

    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;