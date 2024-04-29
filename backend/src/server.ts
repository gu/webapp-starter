import express, { Router, json, urlencoded } from 'express';
import morgan from 'morgan';
import swaggerJSON from '../build/tsoa/swagger.json';
import * as swaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../build/tsoa/routes';
import { getEnv } from './env';
import cors from 'cors';

const env = getEnv();

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(morgan('tiny'));

  // TODO: make this configurable?
  app.use(express.static('public'));

  const apiRouter = Router();
  RegisterRoutes(apiRouter);
  app.use('/api', apiRouter);

  app.use(`/api/docs`, swaggerUI.serve, swaggerUI.setup(swaggerJSON));

  app.listen(env.PORT, () => {
    console.log(`Server running in ${env.PORT}`);
  });
};
