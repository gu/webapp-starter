import { Router } from 'express';
import { configController } from './config.controller';

const configRouter = Router();

configRouter.get('/', (req, res) => {
  const config = configController.getConfig();
  res.json(config);
});

export { configRouter };
