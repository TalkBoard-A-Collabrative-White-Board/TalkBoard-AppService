import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { z } from 'zod';

const syncDataSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  avatarUrl: z.string().url(),
  provider: z.string()
});

const syncUserData = asyncHandler(async (req: Request, res: Response) => {
  const parsedData = syncDataSchema.parse(req.body);

  const user = await prisma.user.upsert({
    where: { id: parsedData.id },
    update: {
      email: parsedData.email,
      username: parsedData.username,
      provider: parsedData.provider,
      avatarUrl: parsedData.avatarUrl
    },
    create: {
      id: parsedData.id,
      email: parsedData.email,
      username: parsedData.username,
      avatarUrl: parsedData.avatarUrl,
      provider: parsedData.provider
    }
  });

  return res
    .status(200)
    .json(new ApiResponse(200, user, 'User Data Synced Successfully'));
});

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

export { getUser, syncUserData };
