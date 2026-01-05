import { RequestHandler } from 'express';

const asyncHandler = (handler: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
