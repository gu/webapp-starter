import express, { Router, json, urlencoded } from 'express';
import morgan from 'morgan';
import swaggerJSON from '../build/swagger.json';
import * as swaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import { getEnv } from './env';

const env = getEnv();

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('tiny'));

  const apiRouter = Router();
  RegisterRoutes(apiRouter);

  app.use('/api', apiRouter);

  app.use(`/api/docs`, swaggerUI.serve, swaggerUI.setup(swaggerJSON));

  app.listen(env.PORT, () => {
    console.log(`Server running in ${env.PORT}`);
  });
};
