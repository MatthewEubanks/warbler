require('dotenv').config();

const errorHandler = require('./handlers/error');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//ROUTES

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`The Server is Running on PORT ${PORT}`);
});
