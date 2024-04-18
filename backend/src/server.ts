import express, { Router, json, urlencoded } from 'express';
import morgan from 'morgan';
import swaggerJSON from '../build/swagger.json';
import * as swaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('tiny'));

  const apiRouter = Router();
  RegisterRoutes(apiRouter);

  app.use('/api', apiRouter);

  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

  // TODO: add port to env
  app.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
