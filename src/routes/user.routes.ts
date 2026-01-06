import { Router } from 'express';
import { getUser, syncUserData } from '../controllers/user.controller.js';

const router = Router();

router.get('/:email', getUser);
router.post('/syncData', syncUserData);

export default router;
