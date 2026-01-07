import express, { NextFunction, Response, Request } from 'express';
import userRoutes from './routes/user.routes.js';
import { ApiError } from './utils/ApiError.js';
import { ApiResponse } from './utils/ApiResponse.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.use('/api/v1/user', userRoutes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json(new ApiResponse(err.statusCode, null, err.message));
  }
  return res
    .status(500)
    .json(new ApiResponse(500, err?.message || 'Internal Server Error'));
});

export { app };
