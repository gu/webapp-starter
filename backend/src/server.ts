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
    routePrefix: '/api',
    controllers: controllers,
  });

  app.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
