import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import { useExpressServer } from 'routing-controllers';
import { controllers } from './api';

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('tiny'));

  useExpressServer(app, {
    // TODO: add prefix to env
    routePrefix: '/api',
    controllers: controllers,
  });

  // TODO: add port to env
  app.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
