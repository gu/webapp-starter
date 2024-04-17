// server.ts
import { createServer } from 'http';
import express, { json, urlencoded } from 'express';
import { apiRouter } from './api';

export const server = async () => {
  const app = express();

  app.use(urlencoded({ extended: true }));

  app.use(json());

  app.use('/api', apiRouter);

  app.get('/', (req, res) => {
    res.send('Hello brother!');
  });

  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
