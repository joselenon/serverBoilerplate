import { Router } from 'express';
import httpErrorMiddleware from '../middlewares/httpErrorMiddleware';

const router = Router();

// Example
// router.use('/', userRouter);

router.use(httpErrorMiddleware);

export default router;
