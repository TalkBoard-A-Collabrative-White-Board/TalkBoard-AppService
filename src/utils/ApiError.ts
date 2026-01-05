class ApiError<T = null> extends Error {
  statusCode: number;
  data: T | null;
  success: boolean;
  error: unknown[];

  constructor(
    statusCode: number,
    message = 'Something Went Wrong',
    errors: unknown[] = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
