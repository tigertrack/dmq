const express = require('express')
const app = express()
const expense = require('./expense')

app.use('/expense', expense)

module.exports = app