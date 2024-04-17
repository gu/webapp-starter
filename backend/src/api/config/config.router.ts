import { Router } from 'express';
import { configController } from './config.controller';

const configRouter = Router();

configRouter.get('/', async (req, res) => {
  const config = await configController.getConfig();
  res.json(config);
});

export { configRouter };
