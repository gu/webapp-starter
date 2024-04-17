import { Router } from 'express';
import { configRouter } from './config/config.router';

const apiRouter = Router();

apiRouter.use('/config', configRouter);

export { apiRouter };
