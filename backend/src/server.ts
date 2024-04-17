// server.ts
import { createServer } from 'http';
import express, { json, urlencoded } from 'express';
import { apiRouter } from './api';
import morgan from 'morgan';

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('tiny'));

  // Add API router
  app.use('/api', apiRouter);

  // Base route for debugging
  // TODO: Refactor to point to swagger
  app.get('/', (req, res) => {
    res.send('Hello brother!');
  });

  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
