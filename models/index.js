const mongoose = require('mongoose');
const dbOptions = {
  user: 'expenseTrackerAdmin',
  pass: '1q2w3e4r',
  ssl: false,
  replicaSet: null,
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
const Expense = require('./expense')
const models = {Expense}

const connectDB = () => {
  return mongoose.connect('mongodb://localhost:27017/expenseTracker', dbOptions);
}

module.exports = {
  connectDB,
  models
}

