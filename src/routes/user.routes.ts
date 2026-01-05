import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'TalkBoard AppService',
  });
});

export default router;
