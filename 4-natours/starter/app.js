const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); // Middleware to serve static files!

// app.use((req, res, next) => {
//   console.log('Hello from the middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Query', req.query);
//   console.log('Params', req.params);
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES MOUNTING

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find route ${req.originalUrl}`,
  // });
  // const err = new Error(`Can't find route ${req.originalUrl}`);
  // err.status = 'fail';
  // err.statusCode = 404;
  // next(err);

  next(new AppError(`Can't find route ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

// 4) START SERVER
module.exports = app;
