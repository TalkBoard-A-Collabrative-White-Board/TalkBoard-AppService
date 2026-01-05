import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const getUser = asyncHandler(async (req, res) => {
  const { email, id } = req.params;
});
