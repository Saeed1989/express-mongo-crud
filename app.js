var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { handleRequest, handleError } = require("./middlewares");
const configureRoutes = require("./controllers");
const cors = require("cors");
const pino = require("pino-http")();


const app = express();
app.use(cors());
app.use(express.json());
app.use(pino);
app.use(handleRequest);

try {
  configureRoutes(app);
} catch (err) {
  handleError(err);
}

app.use(handleError);

module.exports = app;
