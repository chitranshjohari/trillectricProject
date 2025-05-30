const mongoose = require('mongoose');
const connection = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/trillectricdb')
    console.log('Database is connected');
  } catch (error) {
    console.log("Failure in Database Connection")
  }
}
module.exports = connection;