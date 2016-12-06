'use strict'

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3009;

// Routes:
// const homeRoute = require('./routes/index')

app.use(logger(isDev ? 'dev' : 'common'));

app.use(bodyParser.json());

// Set up routes:
// app.use('/', homeRoute);

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something is broken!');
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT);
