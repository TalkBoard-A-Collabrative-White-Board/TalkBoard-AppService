import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.params;

  if (!email) {
    throw new ApiError(400, 'Invalid Email');
  }

  const user = await prisma.user.findUnique({
    where: { email: String(email) }
  });

  if (!user) {
    throw new ApiError(404, 'No User Found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, 'User Data Fetched Successfully'));
});

export { getUser };
