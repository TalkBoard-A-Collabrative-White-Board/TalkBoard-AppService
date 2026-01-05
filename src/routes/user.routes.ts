import { Router } from 'express';
import { getUser } from '../controllers/user.controller.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'TalkBoard AppService'
  });
});

router.get('/:email', getUser);

export default router;
