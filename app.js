const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const airportsRouter = require('./components/airports/airports.router');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const apiRouter = express.Router();
apiRouter.use('/airports', airportsRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const error = {
    message: err.message,
    status: err.status || 500,
    error: req.app.get('env') === 'development' ? err : {}
  };

  // render the error page
  res.status(err.status || 500);
  res.json(error);
});

module.exports = app;
