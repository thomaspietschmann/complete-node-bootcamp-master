class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // we will only send back errors to the users that have this property
    Error.captureStackTrace(this, this.constructor); // prevents pollution of stacktrace
  }
}

module.exports = AppError;
