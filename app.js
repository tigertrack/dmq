const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apiRouter = require('./routes/api')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);

module.exports = app;
