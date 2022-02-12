const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  isFixed: {
    type: Boolean,
    default: false
  },
  isPaid:{
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    default: 0
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId
  }
})

const Expense = mongoose.model("Expense", schema)

module.exports = Expense